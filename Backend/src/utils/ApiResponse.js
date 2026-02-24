class ApiResponse {
  constructor(statusCode, message, data = null, success = true) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = success;
    this.timestamp = new Date().toISOString();
  }

  static success(res, message, data = null, statusCode = 200) {
    return res.status(statusCode).json(
      new ApiResponse(statusCode, message, data, true)
    );
  }

  static error(res, message, statusCode = 500, data = null) {
    return res.status(statusCode).json(
      new ApiResponse(statusCode, message, data, false)
    );
  }
}

module.exports = ApiResponse;
