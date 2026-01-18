/**
 * =====================================================
 * API ROUTES
 * All portfolio API endpoints
 * =====================================================
 */

const express = require('express');
const router = express.Router();
const portfolioData = require('../data/portfolioData');
const geoip = require('geoip-lite');
const Visitor = require('../models/Visitor');

// In-memory fallback for without MongoDB
let localVisitors = [];

/**
 * @route   GET /api/portfolio
 * @desc    Get complete portfolio data
 * @access  Public
 */
router.get('/portfolio', (req, res) => {
    try {
        res.json({
            success: true,
            data: portfolioData,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to fetch portfolio data',
        });
    }
});

/**
 * @route   GET /api/personal
 * @desc    Get personal information
 * @access  Public
 */
router.get('/personal', (req, res) => {
    try {
        res.json({
            success: true,
            data: portfolioData.personal,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to fetch personal data',
        });
    }
});

/**
 * @route   GET /api/skills
 * @desc    Get all technical skills
 * @access  Public
 */
router.get('/skills', (req, res) => {
    try {
        res.json({
            success: true,
            data: portfolioData.skills,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to fetch skills data',
        });
    }
});

/**
 * @route   GET /api/journey
 * @desc    Get journey timeline data
 * @access  Public
 */
router.get('/journey', (req, res) => {
    try {
        res.json({
            success: true,
            data: portfolioData.journey,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to fetch journey data',
        });
    }
});

/**
 * @route   GET /api/projects
 * @desc    Get all projects
 * @access  Public
 */
router.get('/projects', (req, res) => {
    try {
        res.json({
            success: true,
            data: portfolioData.projects,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to fetch projects data',
        });
    }
});

/**
 * @route   GET /api/contact
 * @desc    Get contact information and social links
 * @access  Public
 */
router.get('/contact', (req, res) => {
    try {
        res.json({
            success: true,
            data: portfolioData.contact,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to fetch contact data',
        });
    }
});

/**
 * @route   GET /api/analytics
 * @desc    Get website visitor analytics
 * @access  Public
 */
router.get('/analytics', async (req, res) => {
    try {
        let totalVisits = 0;
        let lastVisitors = [];

        // Try fetching from MongoDB
        try {
            totalVisits = await Visitor.countDocuments();
            lastVisitors = await Visitor.find().sort({ timestamp: -1 }).limit(3);
        } catch (dbError) {
            // Fallback to local memory if DB fails
            console.warn('⚠️ MongoDB unavailable, using local memory for analytics');
            totalVisits = localVisitors.length;
            lastVisitors = localVisitors.slice(-3).reverse();
        }

        res.json({
            success: true,
            data: {
                totalVisits,
                lastVisitors
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to fetch analytics',
        });
    }
});

/**
 * @route   POST /api/analytics/visit
 * @desc    Record a new visit
 * @access  Public
 */
router.post('/analytics/visit', async (req, res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const userAgent = req.headers['user-agent'];
        const geo = geoip.lookup(ip) || {};

        let location = 'Unknown';
        if (geo.city && geo.country) {
            location = `${geo.city}, ${geo.country}`;
        } else if (geo.country) {
            location = geo.country;
        }

        const visitData = {
            ip: ip,
            location: location,
            city: geo.city,
            country: geo.country,
            userAgent: userAgent,
            platform: req.body.platform || 'Unknown', // Can be sent from frontend
            timestamp: new Date()
        };

        // Try saving to MongoDB
        try {
            await Visitor.create(visitData);
        } catch (dbError) {
            // Fallback to local memory
            localVisitors.push(visitData);
            // Keep memory check reasonable (max 1000 records)
            if (localVisitors.length > 1000) {
                localVisitors.shift();
            }
        }

        res.json({ success: true, message: 'Visit recorded' });

    } catch (error) {
        console.error('Analytics Error:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error: Unable to record visit',
        });
    }
});

module.exports = router;
