/**
 * =====================================================
 * EXPRESS SERVER - MAIN ENTRY POINT
 * Portfolio Backend API Server
 * =====================================================
 */

// Load environment variables first
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

// Initialize Express app
const app = express();

// =====================================================
// MIDDLEWARE CONFIGURATION
// =====================================================

// Enable CORS for frontend requests
// IMPORTANT: Update origin in production to your actual frontend URL
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL
        : ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
}));

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// =====================================================
// DATABASE CONNECTION
// =====================================================

// Connect to MongoDB
// NOTE: If you don't need MongoDB for static data, you can comment this out
connectDB().catch(err => {
    console.warn('⚠️  Running without MongoDB connection. Using static data only.');
});

// =====================================================
// API ROUTES
// =====================================================

// Mount API routes
app.use('/api', apiRoutes);

// Root route - API health check
app.get('/', (req, res) => {
    res.json({
        message: '🚀 Portfolio API is running!',
        version: '1.0.0',
        endpoints: {
            portfolio: '/api/portfolio',
            personal: '/api/personal',
            skills: '/api/skills',
            journey: '/api/journey',
            projects: '/api/projects',
            contact: '/api/contact',
        },
    });
});

// =====================================================
// ERROR HANDLING
// =====================================================

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found',
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).json({
        success: false,
        error: process.env.NODE_ENV === 'development'
            ? err.message
            : 'Internal Server Error',
    });
});

// =====================================================
// START SERVER
// =====================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════╗
║     🎨 Portfolio Backend Server Started! 🎨       ║
╠═══════════════════════════════════════════════════╣
║  Mode:     ${process.env.NODE_ENV || 'development'}
║  Port:     ${PORT}
║  API:      http://localhost:${PORT}/api/portfolio
╚═══════════════════════════════════════════════════╝
  `);
});

module.exports = app;
