const User = require('../models/User'); // Importing the User model
const bcrypt = require('bcryptjs'); // Importing bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Importing JWT for authentication

// Register user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body; // Extracting user details from request body
    
    // Check if all required fields are provided
    if (!name || !email || !password) {
      res.status(400).json({
        msg: 'Please fill all required fields',
        success: false
      });
    }
    
    // Check if the user already exists in the database
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        msg: 'User already exists',
        success: false
      });
    }
    
    // Create a new user instance
    user = new User({
      name,
      email,
      password
    });
    
    // Generate salt and hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    
    // Save the new user to the database
    await user.save();
    
    // Generate JWT token for authentication
    jwt.sign(
      { id: user._id }, // Payload: user ID
      process.env.JWT_SECRET, // Secret key from environment variables
      { expiresIn: 36000 }, // Token expiration time (10 hours)
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token // Sending the token in response
        });
      }
    );
  } catch (err) {
    console.log(err); // Logging any errors
    res.status(400).json({ success: false }); // Sending failure response
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Extracting login details from request body
    
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        msg: 'Invalid credentials',
        success: false
      });
    }
    
    // Find the user in the database by email
    let user = await User.findOne({ email }).select('+password'); // Explicitly select password field since it's usually excluded
    if (!user) {
      return res.status(400).json({
        msg: 'Invalid credentials',
        success: false
      });
    }
    
    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        msg: 'Invalid credentials',
        success: false
      });
    }
    
    // Generate JWT token upon successful login
    jwt.sign(
      { id: user._id }, // Payload: user ID
      process.env.JWT_SECRET, // Secret key from environment variables
      { expiresIn: 36000 }, // Token expiration time (10 hours)
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token // Sending the token in response
        });
      }
    );
  } catch (err) {
    console.log(err); // Logging any errors
    res.status(400).json({ success: false }); // Sending failure response
  }
};

// Get current user details
exports.getUser = async (req, res) => {
  try {
    // Retrieve the user details from the database using the user ID from the request
    const user = await User.findById(req.user.id);
    
    // Send the user details as response
    res.status(200).json({
      user,
      success: true
    });
  } catch (err) {
    console.error(err.message); // Logging the error message
    res.status(500).json({ msg: 'Server Error' }); // Sending a server error response
  }
};
