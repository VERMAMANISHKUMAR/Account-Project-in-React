const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true},
  accountName: { type: String,  required: true}, 
  accountHolderName: { type: String, required: true },
  balance: { type: Number, default: 0 },
  createdBy: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Account', AccountSchema);


