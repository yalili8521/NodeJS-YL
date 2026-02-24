const User = require('../models/User.model');
const { generateTokens, verifyRefreshToken } = require('../utils/jwt');
const ApiError = require('../utils/ApiError');
const { HTTP_STATUS } = require('../config/constants');

class AuthService {
  // Register new user
  async register(userData) {
    const { email, password, firstName, lastName } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'User with this email already exists');
    }

    // Create new user
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    // Generate tokens
    const tokens = generateTokens(user._id);

    // Save refresh token to database
    user.refreshToken = tokens.refreshToken;
    await user.save();

    return {
      user: user.toJSON(),
      tokens,
    };
  }

  // Login user
  async login(email, password) {
    // Find user with password field
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid email or password');
    }

    // Check if user is active
    if (!user.isActive) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Your account has been deactivated');
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid email or password');
    }

    // Generate tokens
    const tokens = generateTokens(user._id);

    // Save refresh token to database
    user.refreshToken = tokens.refreshToken;
    await user.save();

    return {
      user: user.toJSON(),
      tokens,
    };
  }

  // Refresh access token
  async refreshAccessToken(refreshToken) {
    try {
      // Verify refresh token
      const decoded = verifyRefreshToken(refreshToken);

      // Find user with refresh token
      const user = await User.findById(decoded.userId).select('+refreshToken');

      if (!user || user.refreshToken !== refreshToken) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid refresh token');
      }

      if (!user.isActive) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'User account is inactive');
      }

      // Generate new tokens
      const tokens = generateTokens(user._id);

      // Update refresh token in database
      user.refreshToken = tokens.refreshToken;
      await user.save();

      return tokens;
    } catch (error) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid or expired refresh token');
    }
  }

  // Logout user
  async logout(userId) {
    const user = await User.findById(userId);
    if (user) {
      user.refreshToken = null;
      await user.save();
    }
    return true;
  }

  // Get current user
  async getCurrentUser(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found');
    }
    return user;
  }
}

module.exports = new AuthService();
