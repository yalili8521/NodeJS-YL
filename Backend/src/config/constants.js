module.exports = {
  // User Roles
  ROLES: {
    ADMIN: 'admin',
    MANAGER: 'manager',
    USER: 'user',
    GUEST: 'guest',
  },

  // Order Status
  ORDER_STATUS: {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled',
  },

  // Transaction Types
  TRANSACTION_TYPES: {
    PAYMENT: 'payment',
    REFUND: 'refund',
    CREDIT: 'credit',
  },

  // Product Categories
  PRODUCT_CATEGORIES: {
    ELECTRONICS: 'electronics',
    FASHION: 'fashion',
    HOME: 'home',
    SPORTS: 'sports',
    BOOKS: 'books',
    OTHER: 'other',
  },

  // HTTP Status Codes
  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
  },
};
