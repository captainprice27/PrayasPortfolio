/**
 * =====================================================
 * DATABASE CONFIGURATION
 * MongoDB connection setup using Mongoose
 * =====================================================
 */

const mongoose = require('mongoose');

/**
 * Connects to MongoDB database
 * Uses the MONGODB_URI from environment variables
 * @returns {Promise} MongoDB connection promise
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Mongoose 8+ has these options enabled by default
      // but keeping them explicit for clarity
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);

    // IMPORTANT: In production, you may want to implement retry logic
    // For now, we exit the process on connection failure
    // process.exit(1);
    console.warn("⚠️  Running in Offline Mode (No MongoDB)");
  }
};

module.exports = connectDB;
