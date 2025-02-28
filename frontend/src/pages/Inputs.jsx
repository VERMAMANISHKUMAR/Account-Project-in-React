import React, { useState } from 'react'; // Importing React and useState hook for state management
import '../assets/Style/CreateAccount.css'; // Importing external CSS for styling

// CreateAccount Component
const CreateAccount = () => {
  // State variables to manage form inputs
  const [parentAccount, setParentAccount] = useState('-CREATE ACCOUNT HEAD-'); // Stores selected parent account
  const [accountName, setAccountName] = useState(''); // Stores entered account name
  const [openingBalance, setOpeningBalance] = useState('0.00'); // Stores entered opening balance
  const [note, setNote] = useState(''); // Stores additional notes

  // Function to handle saving the account details
  const handleSave = () => {
    console.log('Saving account:', { parentAccount, accountName, openingBalance, note });
  };

  // Function to handle closing the form
  const handleClose = () => {
    console.log('Closing form');
  };

  return (
    <div className="create-account-container">
      {/* Header Section */}
      <div className="header">
        <h1>Accounts<span className="subheader">Add/Update Accounts</span></h1>
        <p>Home<span> / </span><span>Accounts List</span></p>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <p className="error-message">Please Enter Valid Data</p> {/* Display error message if needed */}

        <div className="form-grid">
          {/* Parent Account Selection */}
          <label htmlFor="parentAccount">Parent Account *</label>
          <select 
            id="parentAccount" 
            value={parentAccount} 
            onChange={(e) => setParentAccount(e.target.value)}
          >
            <option value="-CREATE ACCOUNT HEAD-">-CREATE ACCOUNT HEAD-</option>
          </select>

          {/* Note Input */}
          <label htmlFor="note">Note</label>
          <textarea 
            id="note" 
            value={note} 
            onChange={(e) => setNote(e.target.value)} 
          />

          {/* Account Number (Read-only) */}
          <label htmlFor="accountNumber">Account Number *</label>
          <input type="text" id="accountNumber" value="AC/05/0004" readOnly />

          {/* Account Name Input */}
          <label htmlFor="accountName">Account Name *</label>
          <input 
            type="text" 
            id="accountName" 
            value={accountName} 
            onChange={(e) => setAccountName(e.target.value)} 
          />

          {/* Opening Balance Input */}
          <label htmlFor="openingBalance">Opening Balance</label>
          <input 
            type="text" 
            id="openingBalance" 
            value={openingBalance} 
            onChange={(e) => setOpeningBalance(e.target.value)} 
          />
        </div>

        {/* Button Group for Actions */}
        <div className="button-group">
          <button className="save-button" onClick={handleSave}>Save</button> {/* Save Button */}
          <button className="close-button" onClick={handleClose}>Close</button> {/* Close Button */}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount; // Exporting the component for use
