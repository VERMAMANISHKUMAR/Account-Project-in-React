import React, { useState } from 'react';
import '../assets/Style/CreateAccount.css';

const CreateAccount = () => {
  const [parentAccount, setParentAccount] = useState('-CREATE ACCOUNT HEAD-');
  const [accountName, setAccountName] = useState('');
  const [openingBalance, setOpeningBalance] = useState('0.00');
  const [note, setNote] = useState('');

  const handleSave = () => {
    console.log('Saving account:', { parentAccount, accountName, openingBalance, note });
  };

  const handleClose = () => {
    console.log('Closing form');
  };

  return (
    <div className="create-account-container">
      <div className="header">

        <h1>Accounts<span className="subheader">Add/Update Accounts</span></h1>
      
        <p>Home<span> / </span><span>Accounts List</span></p>
      </div>

      <div className="form-container">
        <p className="error-message">Please Enter Valid Data</p>

        <div className="form-grid">
          <label htmlFor="parentAccount">Parent Account *</label>
          <select id="parentAccount" value={parentAccount} onChange={(e) => setParentAccount(e.target.value)}>
            <option value="-CREATE ACCOUNT HEAD-">-CREATE ACCOUNT HEAD-</option>
          </select>

          <label htmlFor="note">Note</label>
          <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} />

          <label htmlFor="accountNumber">Account Number *</label>
          <input type="text" id="accountNumber" value="AC/05/0004" readOnly />

          <label htmlFor="accountName">Account Name *</label>
          <input type="text" id="accountName" value={accountName} onChange={(e) => setAccountName(e.target.value)} />

          <label htmlFor="openingBalance">Opening Balance</label>
          <input type="text" id="openingBalance" value={openingBalance} onChange={(e) => setOpeningBalance(e.target.value)} />
        </div>

        <div className="button-group">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="close-button" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
