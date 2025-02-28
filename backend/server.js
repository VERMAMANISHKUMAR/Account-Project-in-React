require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./router/authRoutes');
const accountRoutes=require('./router/accountRoutes')
// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/accounts', accountRoutes);
// Handle 404 Errors
app.use((req, res) => {
          res.status(404).json({ message: '❌ API Route Not Found' });
        });
        
        // Global Error Handling
        app.use((err, req, res, next) => {
          console.error('❌ Server Error:', err.stack);
          res.status(500).json({ message: '❌ Internal Server Error' });
        });
// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 SERVER RUNNING ON PORT: ${PORT}`);
});
