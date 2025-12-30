# Dashboard Application

A comprehensive, full-stack business analytics dashboard application built with React and Node.js. This application provides real-time insights into sales, customers, products, transactions, and geographic data through an intuitive and modern user interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Routes](#frontend-routes)
- [Database Models](#database-models)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This dashboard application is designed to provide business intelligence and analytics capabilities for managing and visualizing key business metrics. The application features a responsive design with dark/light mode support, interactive charts, data grids, and comprehensive reporting capabilities.

### Key Capabilities

- **Real-time Analytics**: View up-to-date statistics on sales, customers, and transactions
- **Data Visualization**: Interactive charts and graphs using Nivo visualization library
- **User Management**: Admin panel for managing users and permissions
- **Geographic Insights**: Visual representation of sales data by geographic location
- **Transaction Management**: Comprehensive transaction tracking and filtering
- **Product Analytics**: Detailed product performance metrics and statistics
- **Performance Monitoring**: Track user and system performance metrics

## ✨ Features

### Frontend Features

-  **Modern UI/UX**: Built with Material-UI (MUI) for a polished, professional interface
-  **Dark/Light Mode**: Toggle between dark and light themes
-  **Interactive Charts**: Multiple chart types including line, bar, pie, and geographic maps
-  **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
-  **Advanced Data Grids**: Sortable, filterable, and searchable data tables
-  **Navigation**: Intuitive sidebar navigation with route management
-  **State Management**: Redux Toolkit for efficient state management
-  **Real-time Updates**: RTK Query for efficient data fetching and caching

### Backend Features

-  **RESTful API**: Well-structured REST API endpoints
-  **Security**: Helmet.js for security headers, CORS configuration
-  **Logging**: Morgan middleware for HTTP request logging
-  **Database**: MongoDB with Mongoose ODM
-  **Modular Architecture**: Organized controllers, routes, and models
-  **Data Seeding**: Built-in data seeding capabilities for development

##  Technology Stack

### Frontend

- **React** (v18.2.0) - UI library
- **Material-UI (MUI)** (v5.10.15) - Component library
- **Redux Toolkit** (v1.9.0) - State management
- **React Router DOM** (v6.4.3) - Routing
- **Nivo Charts** (v0.80.0) - Data visualization
  - `@nivo/bar` - Bar charts
  - `@nivo/line` - Line charts
  - `@nivo/pie` - Pie charts
  - `@nivo/geo` - Geographic visualizations
- **MUI X Data Grid** (v5.17.13) - Advanced data tables
- **Emotion** - CSS-in-JS styling
- **React DatePicker** (v4.8.0) - Date selection component

### Backend

- **Node.js** - Runtime environment
- **Express.js** (v4.19.2) - Web framework
- **MongoDB** - Database
- **Mongoose** (v8.4.3) - ODM for MongoDB
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **Helmet** (v7.1.0) - Security middleware
- **Morgan** (v1.10.0) - HTTP request logger
- **Body Parser** (v1.20.2) - Request body parsing
- **Dotenv** (v16.4.5) - Environment variable management
- **Country ISO Converter** (v1.1.0) - Country code conversion utilities

## 📁 Project Structure

```
dashboard/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── assets/        # Images and static files
│   │   ├── components/    # Reusable UI components
│   │   │   ├── BreakdownChart.jsx
│   │   │   ├── DataGridCustomColumnMenu.jsx
│   │   │   ├── DataGridCustomToolbar.jsx
│   │   │   ├── FlexBetween.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── OverviewChart.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── StatBox.jsx
│   │   ├── scenes/        # Page components (routes)
│   │   │   ├── admin/
│   │   │   ├── breakdown/
│   │   │   ├── customers/
│   │   │   ├── daily/
│   │   │   ├── dashboard/
│   │   │   ├── geography/
│   │   │   ├── layout/
│   │   │   ├── monthly/
│   │   │   ├── overview/
│   │   │   ├── performance/
│   │   │   ├── products/
│   │   │   └── transactions/
│   │   ├── state/         # Redux state management
│   │   │   ├── api.js     # RTK Query API configuration
│   │   │   ├── geoData.js # Geographic data
│   │   │   └── index.js   # Redux store configuration
│   │   ├── App.js         # Main application component
│   │   ├── index.js       # Application entry point
│   │   ├── index.css      # Global styles
│   │   └── theme.js       # MUI theme configuration
│   ├── package.json
│   └── jsconfig.json
│
├── server/                # Backend Node.js application
│   ├── controllers/       # Request handlers
│   │   ├── client.js
│   │   ├── general.js
│   │   ├── management.js
│   │   └── sales.js
│   ├── data/              # Seed data
│   │   └── index.js
│   ├── models/            # Mongoose schemas
│   │   ├── AffiliateStat.js
│   │   ├── OverallStat.js
│   │   ├── Product.js
│   │   ├── ProductStat.js
│   │   ├── Transaction.js
│   │   └── User.js
│   ├── routes/            # API route definitions
│   │   ├── client.js
│   │   ├── general.js
│   │   ├── management.js
│   │   └── sales.js
│   ├── index.js           # Server entry point
│   └── package.json
│
└── README.md              # This file
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **MongoDB** (v4.4 or higher) - [Download MongoDB](https://www.mongodb.com/try/download/community)
  - Alternatively, use MongoDB Atlas (cloud-hosted MongoDB)
- **Git** - For version control (optional)

### Recommended Tools

- **MongoDB Compass** - GUI for MongoDB (optional but recommended)
- **Postman** or **Insomnia** - For API testing (optional)
- **VS Code** - Recommended code editor with extensions:
  - ESLint
  - Prettier
  - MongoDB for VS Code

##  Installation

### Step 1: Clone the Repository

```bash
git clone (https://github.com/betuldanismaz/dashboard)
cd dashboard
```

### Step 2: Install Server Dependencies

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

### Step 3: Install Client Dependencies

Navigate to the client directory and install dependencies:

```bash
cd ../client
npm install
```

##  Configuration

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=9000

# MongoDB Connection
MONGO_URL=mongodb://localhost:27017/dashboard
# OR for MongoDB Atlas:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/dashboard?retryWrites=true&w=majority

# Optional: Add other environment variables as needed
```

### Client Environment Variables

Create a `.env` file in the `client` directory:

```env
# API Base URL
REACT_APP_BASE_URL=http://localhost:9000
```

**Note**: For production, update `REACT_APP_BASE_URL` to your production server URL.

### MongoDB Setup

#### Option 1: Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service:

   ```bash
   # Windows
   net start MongoDB

   # macOS/Linux
   sudo systemctl start mongod
   ```

3. MongoDB will run on `mongodb://localhost:27017` by default

#### Option 2: MongoDB Atlas (Cloud)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use `0.0.0.0/0` for development)
5. Get your connection string and update `MONGO_URL` in `.env`

### Database Seeding (Optional)

To populate the database with sample data, uncomment the data insertion lines in `server/index.js`:

```javascript
// Uncomment these lines in server/index.js after first run:
Product.insertMany(dataProduct);
Transaction.insertMany(dataTransaction);
OverallStat.insertMany(dataOverallStat);
ProductStat.insertMany(dataProductStat);
AffiliateStat.insertMany(dataAffiliateStat);
User.insertMany(dataUser);
```

**Important**: Only run the seeding once. Comment these lines again after seeding to avoid duplicate data.

## 🏃 Running the Application

### Development Mode

#### Terminal 1: Start the Backend Server

```bash
cd server
npm run dev
```

The server will start on `http://localhost:9000` (or the port specified in your `.env` file).

#### Terminal 2: Start the Frontend Client

```bash
cd client
npm start
```

The client will start on `http://localhost:3000` and automatically open in your browser.

### Production Mode

#### Build the Frontend

```bash
cd client
npm run build
```

This creates an optimized production build in the `client/build` directory.

#### Start the Backend Server

```bash
cd server
npm start
```

**Note**: For production deployment, consider using process managers like PM2, or deploy to cloud platforms like Heroku, AWS, or Vercel.

## 🔌 API Endpoints

### General Routes (`/general`)

- `GET /general/user/:id` - Get user by ID
- `GET /general/dashboard` - Get dashboard statistics

### Client Routes (`/client`)

- `GET /client/products` - Get all products
- `GET /client/customers` - Get all customers
- `GET /client/transactions` - Get transactions (supports pagination, sorting, search)
  - Query parameters:
    - `page` - Page number
    - `pageSize` - Items per page
    - `sort` - Sort field and direction (e.g., `{"field": "cost", "sort": "asc"}`)
    - `search` - Search term
- `GET /client/geography` - Get geographic sales data

### Sales Routes (`/sales`)

- `GET /sales/sales` - Get sales statistics

### Management Routes (`/management`)

- `GET /management/admins` - Get all admin users
- `GET /management/performance/:id` - Get performance metrics for a specific user

## 🧭 Frontend Routes

The application includes the following routes:

- `/` - Redirects to `/dashboard`
- `/dashboard` - Main dashboard with overview statistics
- `/products` - Product listing and analytics
- `/customers` - Customer management and insights
- `/transactions` - Transaction history and details
- `/geography` - Geographic sales visualization
- `/overview` - Business overview statistics
- `/daily` - Daily sales analytics
- `/monthly` - Monthly sales analytics
- `/breakdown` - Sales breakdown by category
- `/admin` - Admin user management
- `/performance` - Performance metrics and analytics

## 🗄️ Database Models

### User Model

```javascript
{
  name: String (required, 2-100 chars),
  email: String (required, max 50 chars, unique),
  password: String (required, min 5 chars),
  city: String,
  state: String,
  country: String,
  occupation: String,
  phoneNumber: String,
  transactions: Array,
  role: String (enum: ["user", "admin", "superadmin"], default: "admin"),
  timestamps: true
}
```

### Product Model

```javascript
{
  name: String,
  price: Number,
  description: String,
  category: String,
  rating: Number,
  supply: Number,
  timestamps: true
}
```

### Transaction Model

```javascript
{
  userId: String,
  cost: String,
  products: [ObjectId],
  timestamps: true
}
```

### OverallStat Model

Stores aggregated statistics including:

- Total customers
- Yearly sales totals
- Monthly data arrays
- Daily data arrays
- Sales by category

### ProductStat Model

Stores product-specific statistics and performance metrics.

### AffiliateStat Model

Stores affiliate marketing statistics and performance data.

##  Development

### Code Structure

- **Components**: Reusable UI components located in `client/src/components/`
- **Scenes**: Page-level components in `client/src/scenes/`
- **State Management**: Redux store and API configuration in `client/src/state/`
- **Backend Controllers**: Business logic in `server/controllers/`
- **Routes**: API route definitions in `server/routes/`
- **Models**: Database schemas in `server/models/`

### Adding New Features

1. **New API Endpoint**:

   - Add controller function in `server/controllers/`
   - Add route in `server/routes/`
   - Import and use route in `server/index.js`

2. **New Frontend Page**:

   - Create component in `client/src/scenes/`
   - Add route in `client/src/App.js`
   - Add API endpoint in `client/src/state/api.js` if needed

3. **New Database Model**:
   - Create schema in `server/models/`
   - Import and use in controllers

### Development Scripts

#### Server Scripts

- `npm start` - Start server in production mode
- `npm run dev` - Start server with nodemon (auto-restart on changes)

#### Client Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

##  Building for Production

### Frontend Build

```bash
cd client
npm run build
```

The build folder will contain optimized production files ready for deployment.

### Deployment Options

#### Frontend Deployment

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `build` folder or connect via Git
- **AWS S3 + CloudFront**: Upload build folder to S3 and configure CloudFront
- **Heroku**: Use static buildpack for React apps

#### Backend Deployment

- **Heroku**: Deploy Node.js app with MongoDB Atlas
- **AWS EC2/Elastic Beanstalk**: Deploy Express server
- **DigitalOcean**: App Platform or Droplets
- **Railway**: Simple Node.js deployment

### Environment Variables for Production

Ensure all production environment variables are set:

- `MONGO_URL` - Production MongoDB connection string
- `PORT` - Production server port
- `REACT_APP_BASE_URL` - Production API URL

##  Troubleshooting

### Common Issues

#### MongoDB Connection Error

**Problem**: `MongooseError: Operation timed out`

**Solutions**:

- Verify MongoDB is running: `mongod --version`
- Check connection string in `.env`
- Ensure MongoDB service is started
- For Atlas: Check IP whitelist and credentials

#### Port Already in Use

**Problem**: `Error: listen EADDRINUSE: address already in use :::9000`

**Solutions**:

- Change PORT in `.env` file
- Kill process using the port:

  ```bash
  # Windows
  netstat -ano | findstr :9000
  taskkill /PID <PID> /F

  # macOS/Linux
  lsof -ti:9000 | xargs kill
  ```

#### CORS Errors

**Problem**: CORS policy blocking requests

**Solutions**:

- Verify CORS is enabled in `server/index.js`
- Check `REACT_APP_BASE_URL` matches server URL
- Ensure server is running before client

#### Module Not Found Errors

**Problem**: `Cannot find module 'xxx'`

**Solutions**:

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check if package is listed in `package.json`

#### Build Errors

**Problem**: Build fails with various errors

**Solutions**:

- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall
- Check Node.js version compatibility
- Review error messages for specific package issues

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow existing code style and formatting
- Add comments for complex logic
- Update documentation for new features
- Test your changes thoroughly

##  License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

##  Support

For support, please open an issue in the repository or contact me.

##  Acknowledgments

- Material-UI team for the excellent component library
- Nivo team for beautiful data visualization components
- MongoDB team for the robust database solution
- React team for the powerful UI library

---

**Last Updated**: 2024

**Version**: 1.0.0
