# Sneat Backend API

Express.js REST API with MongoDB for the Sneat Dashboard application.

## Features

- **Authentication**: JWT with refresh tokens
- **Authorization**: Role-based access control
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, Rate limiting
- **Validation**: Express-validator
- **Error Handling**: Centralized error handling
- **Logging**: Morgan HTTP request logger

## Prerequisites

- Node.js (v16+)
- MongoDB (v5+)

## Installation

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your configuration
```

## Environment Variables

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sneat_db
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
CORS_ORIGIN=http://localhost:5173
```

## Running the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/refresh-token` - Refresh access token
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/me` - Get current user

### Analytics Dashboard
- `GET /api/v1/analytics/overview` - Get analytics overview
- `GET /api/v1/analytics/revenue` - Get revenue data
- `GET /api/v1/analytics/orders` - Get order statistics
- `GET /api/v1/analytics/transactions` - Get recent transactions
- `GET /api/v1/analytics/browser-stats` - Get browser statistics

### CRM Dashboard
- `GET /api/v1/crm/overview` - Get CRM overview
- `GET /api/v1/crm/customers` - Get customer list
- `GET /api/v1/crm/leads` - Get leads data
- `GET /api/v1/crm/sales-by-country` - Get sales by country
- `GET /api/v1/crm/team-members` - Get team members

### E-commerce Dashboard
- `GET /api/v1/ecommerce/overview` - Get e-commerce overview
- `GET /api/v1/ecommerce/revenue-sales` - Get revenue and sales
- `GET /api/v1/ecommerce/products/performance` - Get product performance
- `GET /api/v1/ecommerce/conversion-rate` - Get conversion rate

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── services/       # Business logic
│   ├── validators/     # Request validators
│   ├── utils/          # Utility functions
│   └── app.js          # Express app setup
├── server.js           # Entry point
├── .env                # Environment variables
└── package.json
```

## License

ISC
