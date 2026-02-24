const authService = require('../services/auth.service');
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');
const { HTTP_STATUS } = require('../config/constants');

// Register new user
const register = asyncHandler(async (req, res) => {
  console.log('Register endpoint hit:', req.body);
  const result = await authService.register(req.body);

  // Set refresh token as HTTP-only cookie
  res.cookie('refreshToken', result.tokens.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  ApiResponse.success(
    res,
    'User registered successfully',
    {
      user: result.user,
      accessToken: result.tokens.accessToken,
    },
    HTTP_STATUS.CREATED
  );
});

// Login user
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);

  // Set refresh token as HTTP-only cookie
  res.cookie('refreshToken', result.tokens.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  ApiResponse.success(res, 'Login successful', {
    user: result.user,
    accessToken: result.tokens.accessToken,
  });
});

// Refresh access token
const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.body.refreshToken || req.cookies.refreshToken;

  if (!refreshToken) {
    return ApiResponse.error(res, 'Refresh token is required', HTTP_STATUS.BAD_REQUEST);
  }

  const tokens = await authService.refreshAccessToken(refreshToken);

  // Set new refresh token as HTTP-only cookie
  res.cookie('refreshToken', tokens.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  ApiResponse.success(res, 'Token refreshed successfully', {
    accessToken: tokens.accessToken,
  });
});

// Logout user
const logout = asyncHandler(async (req, res) => {
  await authService.logout(req.user._id);

  // Clear refresh token cookie
  res.clearCookie('refreshToken');

  ApiResponse.success(res, 'Logout successful');
});

// Get current user
const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await authService.getCurrentUser(req.user._id);
  ApiResponse.success(res, 'User retrieved successfully', { user });
});

module.exports = {
  register,
  login,
  refreshToken,
  logout,
  getCurrentUser,
};
