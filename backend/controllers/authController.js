const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      res.status(400).json({
        msg: 'Please fill all required fields',
        success: false
      });
    }
    
    let user = await User.findOne({email});
    if (user) {
      return res.status(400).json({
        msg: 'User already exists',
        success: false
      });
    }
    
    user = new User({
      name,
      email,
      password
    });
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    
    jwt.sign(
      {id: user._id},
      process.env.JWT_SECRET,
      {expiresIn: 36000},
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(400).json({success: false});
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        msg: 'Invalid credentials',
        success: false
      });
    }
    
    let user = await User.findOne({email}).select('+password');
    if (!user) {
      return res.status(400).json({
        msg: 'Invalid credentials',
        success: false
      });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        msg: 'Invalid credentials',
        success: false
      });
    }
    
    jwt.sign(
      {id: user._id},
      process.env.JWT_SECRET,
      {expiresIn: 36000},
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(400).json({success: false});
  }
};

// Get current user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      user,
      success: true
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({msg: 'Server Error'});
  }
};
