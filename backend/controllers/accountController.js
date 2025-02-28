const Account = require('../models/Account');

//We are Generate the Unique Account Number
const generateAccountNumber = async () => {
  let isUnique = false;
  let accountNumber;

  while (!isUnique) {
    accountNumber = `AC/05/${String(Math.floor(1000 + Math.random() * 9000))}`;
    const existingAccount = await Account.findOne({ accountNumber });
    if (!existingAccount) isUnique = true;
  }

  return accountNumber;
};

//We are Create the New Account
exports.createAccount = async (req, res) => {
  try {
    const { accountName, accountHolderName, balance, createdBy } = req.body;

    if (!accountName || !accountHolderName || !createdBy) {
      return res.status(400).json({ message: ' All fields are required' });
    }

    // Generate Unique Account Number
    let accountNumber = await generateAccountNumber();

    //  Create New Account
    const newAccount = new Account({
      accountNumber,
      accountName,
      accountHolderName,
      balance,
      createdBy
    });

    await newAccount.save();
    res.status(201).json({ message: 'Account Created Successfully', account: newAccount });

  } catch (error) {
    console.error('Error Creating Account:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Get All Accounts
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find().sort({ createdAt: -1 });
    res.status(200).json(accounts);
  } catch (error) {
    console.error('❌ Error Fetching Accounts:', error);
    res.status(500).json({ message: '❌ Internal Server Error' });
  }
};
