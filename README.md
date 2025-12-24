# Dashboard Analytics Application

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
- [Database Models](#database-models)
- [Frontend Architecture](#frontend-architecture)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This dashboard application is designed to help businesses monitor and analyze their operations through comprehensive data visualization and reporting. The application features a responsive design with dark/light mode support, interactive charts, and real-time data updates.

### Key Capabilities

- **Real-time Analytics**: Monitor sales, transactions, and customer data in real-time
- **Data Visualization**: Interactive charts and graphs using Nivo visualization library
- **User Management**: Role-based access control (user, admin, superadmin)
- **Geographic Analysis**: Visualize sales and customer data by geographic location
- **Performance Tracking**: Monitor individual user and affiliate performance
- **Responsive Design**: Fully responsive UI that works on all device sizes
- **Theme Support**: Dark and light mode with customizable color schemes

## ✨ Features

### Dashboard Views

1. **Main Dashboard** (`/dashboard`)

   - Overview of key metrics and KPIs
   - Recent transactions table
   - Sales breakdown by category
   - Monthly and daily statistics

2. **Products** (`/products`)

   - Product listing and management
   - Product statistics and performance metrics
   - Product sales analytics

3. **Customers** (`/customers`)

   - Customer database management
   - Customer analytics and insights
   - Customer transaction history

4. **Transactions** (`/transactions`)

   - Transaction history with pagination
   - Advanced filtering and sorting
   - Search functionality
   - Export capabilities

5. **Geography** (`/geography`)

   - Geographic distribution visualization
   - Sales by country/region
   - Interactive map charts

6. **Sales Analytics**

   - **Overview** (`/overview`): High-level sales metrics
   - **Daily** (`/daily`): Daily sales breakdown
   - **Monthly** (`/monthly`): Monthly sales trends
   - **Breakdown** (`/breakdown`): Sales breakdown by category

7. **Performance** (`/performance`)

   - Individual user performance metrics
   - Affiliate performance tracking
   - Performance analytics

8. **Admin** (`/admin`)
   - User management
   - System administration
   - Role management

## 🛠 Technology Stack

### Frontend

- **React 18.2.0** - Modern UI library
- **Material-UI (MUI) 5.10.15** - Component library and design system
- **Redux Toolkit 1.9.0** - State management
- **RTK Query** - Data fetching and caching
- **React Router DOM 6.4.3** - Client-side routing
- **Nivo Charts** - Data visualization library
  - `@nivo/bar` - Bar charts
  - `@nivo/line` - Line charts
  - `@nivo/pie` - Pie charts
  - `@nivo/geo` - Geographic visualizations
- **React DatePicker 4.8.0** - Date selection component
- **Emotion** - CSS-in-JS styling solution

### Backend

- **Node.js** - JavaScript runtime
- **Express 4.19.2** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.4.3** - MongoDB object modeling
- **Helmet 7.1.0** - Security middleware
- **CORS 2.8.5** - Cross-origin resource sharing
- **Morgan 1.10.0** - HTTP request logger
- **Body-Parser 1.20.2** - Request body parsing
- **dotenv 16.4.5** - Environment variable management
- **country-iso-2-to-3 1.1.0** - Country code conversion

### Development Tools

- **Nodemon 3.1.4** - Development server auto-reload
- **React Scripts 5.0.1** - Build tooling for React

## 📁 Project Structure

```
dashboard/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── robots.txt
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
│   │   ├── scenes/        # Page components/views
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
│   │   └── theme.js       # Material-UI theme configuration
│   ├── package.json
│   └── jsconfig.json
│
├── server/                # Backend Node.js application
│   ├── controllers/       # Request handlers
│   │   ├── client.js
│   │   ├── general.js
│   │   ├── management.js
│   │   └── sales.js
│   ├── models/           # MongoDB schemas
│   │   ├── AffiliateStat.js
│   │   ├── OverallStat.js
│   │   ├── Product.js
│   │   ├── ProductStat.js
│   │   ├── Transaction.js
│   │   └── User.js
│   ├── routes/           # API route definitions
│   │   ├── client.js
│   │   ├── general.js
│   │   ├── management.js
│   │   └── sales.js
│   ├── data/            # Seed data (optional)
│   │   └── index.js
│   ├── index.js         # Server entry point
│   └── package.json
│
└── README.md            # This file
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher recommended)
- **npm** (v6 or higher) or **yarn**
- **MongoDB** (v4.4 or higher) - Local installation or MongoDB Atlas account
- **Git** (for version control)

### Verifying Installation

```bash
node --version
npm --version
mongod --version
```

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dashboard
```

### 2. Install Server Dependencies

```bash
cd server
npm install
```

### 3. Install Client Dependencies

```bash
cd ../client
npm install
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=9000

# MongoDB Connection
MONGO_URL=mongodb://localhost:27017/dashboard
# OR for MongoDB Atlas:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/dashboard?retryWrites=true&w=majority

# Optional: JWT Secret (if implementing authentication)
# JWT_SECRET=your-secret-key-here
```

### Client Configuration

Create a `.env` file in the `client` directory:

```env
# Backend API URL
REACT_APP_BASE_URL=http://localhost:9000
```

**Note**: For production, update `REACT_APP_BASE_URL` to your production API URL.

## 🏃 Running the Application

### Development Mode

#### Start the Backend Server

```bash
cd server
npm run dev
```

The server will start on `http://localhost:9000` (or the port specified in your `.env` file).

#### Start the Frontend Development Server

Open a new terminal window:

```bash
cd client
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser.

### Production Mode

#### Build the Frontend

```bash
cd client
npm run build
```

This creates an optimized production build in the `client/build` directory.

#### Start the Production Server

```bash
cd server
npm start
```

## 📡 API Endpoints

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
    - `sort` - Sort field and direction (e.g., `{"field":"createdAt","sort":"desc"}`)
    - `search` - Search term
- `GET /client/geography` - Get geographic data

### Sales Routes (`/sales`)

- `GET /sales/sales` - Get sales statistics

### Management Routes (`/management`)

- `GET /management/admins` - Get all admin users
- `GET /management/performance/:id` - Get performance data for a specific user

## 🗄️ Database Models

### User Model

```javascript
{
  name: String (required, 2-100 chars),
  email: String (required, max 50, unique),
  password: String (required, min 5),
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

### Transaction Model

```javascript
{
  userId: String,
  cost: String,
  products: [ObjectId],
  timestamps: true
}
```

### Product Model

Stores product information including name, description, price, category, and statistics.

### ProductStat Model

Tracks product-specific statistics including sales, units sold, and monthly data.

### OverallStat Model

Stores overall business statistics including:

- Total customers
- Yearly sales totals
- Monthly data breakdown
- Daily data breakdown
- Sales by category

### AffiliateStat Model

Tracks affiliate marketing statistics and performance metrics.

## 🎨 Frontend Architecture

### State Management

The application uses **Redux Toolkit** with **RTK Query** for efficient state management and data fetching:

- **API Slice**: Centralized API configuration in `src/state/api.js`
- **Caching**: Automatic caching and invalidation of API responses
- **Tags**: Used for cache invalidation and refetching

### Routing

React Router DOM handles client-side routing with the following structure:

- All routes are wrapped in a `Layout` component
- Default route (`/`) redirects to `/dashboard`
- Protected routes can be implemented by adding authentication checks

### Theme System

The application features a comprehensive theme system:

- **Dark/Light Mode**: Toggleable theme modes
- **Custom Color Palette**: Purple and teal color scheme
- **Responsive Typography**: Scalable font system
- **Material-UI Integration**: Full MUI theme customization

### Components

#### Reusable Components

- **Header**: Top navigation bar with user info and theme toggle
- **Sidebar**: Navigation sidebar with menu items
- **StatBox**: Displays key statistics with icons
- **FlexBetween**: Utility component for flexbox layouts
- **DataGridCustomToolbar**: Custom toolbar for data grids
- **DataGridCustomColumnMenu**: Custom column menu for data grids
- **BreakdownChart**: Chart component for category breakdowns
- **OverviewChart**: Chart component for overview statistics

#### Chart Components

All charts use the **Nivo** library:

- Bar charts for comparisons
- Line charts for trends
- Pie charts for distributions
- Geographic maps for location data

## 🔧 Development

### Code Style

- Use ES6+ JavaScript features
- Follow React best practices (functional components, hooks)
- Use meaningful variable and function names
- Add comments for complex logic

### Adding New Features

1. **Backend**: Add routes in `server/routes/`, controllers in `server/controllers/`, and models in `server/models/`
2. **Frontend**: Add API endpoints in `client/src/state/api.js`, create scene components in `client/src/scenes/`
3. **State Management**: Use RTK Query for data fetching, Redux for global state

### Database Seeding

To seed the database with sample data, uncomment the data insertion code in `server/index.js`:

```javascript
Product.insertMany(dataProduct);
Transaction.insertMany(dataTransaction);
OverallStat.insertMany(dataOverallStat);
ProductStat.insertMany(dataProductStat);
AffiliateStat.insertMany(dataAffiliateStat);
User.insertMany(dataUser);
```

**Note**: Only run this once to avoid duplicate data.

## 🚢 Deployment

### Backend Deployment

1. Set up a MongoDB database (MongoDB Atlas recommended for cloud)
2. Update `MONGO_URL` in production environment variables
3. Deploy to a Node.js hosting service (Heroku, AWS, DigitalOcean, etc.)
4. Ensure the server port is configured correctly

### Frontend Deployment

1. Build the production bundle: `npm run build`
2. Deploy the `build` folder to a static hosting service:
   - **Netlify**: Drag and drop the build folder
   - **Vercel**: Connect your repository for automatic deployments
   - **AWS S3 + CloudFront**: Upload build folder to S3 bucket
3. Update `REACT_APP_BASE_URL` to point to your production API

### Environment Variables in Production

Ensure all environment variables are set in your hosting platform's environment variable configuration.

## 🔒 Security Considerations

- **Helmet.js**: Already configured for security headers
- **CORS**: Configured to allow cross-origin requests (adjust for production)
- **Password Hashing**: Implement bcrypt for password hashing (recommended)
- **JWT Authentication**: Consider implementing JWT for secure authentication
- **Input Validation**: Add validation middleware (e.g., express-validator)
- **Rate Limiting**: Consider adding rate limiting for API endpoints

## 🧪 Testing

### Running Tests

```bash
# Frontend tests
cd client
npm test

# Backend tests (when implemented)
cd server
npm test
```

## 📝 Scripts Reference

### Server Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Client Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add comments for complex functionality
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support, please open an issue in the repository or contact the development team.

## 🙏 Acknowledgments

- Material-UI for the component library
- Nivo for the visualization library
- MongoDB for the database solution
- React team for the amazing framework

---

**Built with ❤️ using React and Node.js**
