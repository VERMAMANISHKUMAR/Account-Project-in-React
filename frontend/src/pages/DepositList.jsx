import React, { useState } from 'react';
import '../assets/Style/MoneyTransferList.css'; // Importing external CSS for styling
import { Link } from 'react-router-dom'; // Importing Link for navigation

// MoneyTransferList Component
const MoneyTransferList = () => {
  // State variables to manage filters and search inputs
  const [transferDate, setTransferDate] = useState('');
  const [debitAccount, setDebitAccount] = useState('');
  const [creditAccount, setCreditAccount] = useState('');
  const [users, setUsers] = useState('All');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data (replace with API calls for real data)
  const transfers = []; 

  return (
    <div className="money-transfer-list">
      {/* Header Section */}
      <div className="header">
        <h1>Deposit List <span className="subheader">View/Search Accounts</span></h1>
        <div className="header-links">
          <p>Home <span>/</span> <span>Deposit List</span></p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters">
        {/* Button to navigate to new deposit form */}
        <Link to='/inputs'>
          <button className="create-transfer-btn">+ New Deposit</button>
        </Link>

        {/* Filter Inputs */}
        <div className="filter-row">
          {/* Transfer Date Filter */}
          <div className="filter-item">
            <label style={{ color: 'black', fontWeight: 'bold' }}>Transfer Date</label>
            <input 
              type="date" 
              value={transferDate} 
              onChange={(e) => setTransferDate(e.target.value)} 
            />
          </div>

          {/* Debit Account Filter */}
          <div className="filter-item">
            <label style={{ color: 'black', fontWeight: 'bold' }}>Debit Account</label>
            <select value={debitAccount} onChange={(e) => setDebitAccount(e.target.value)}>
              <option value="">Select</option>
              {/* Debit account options will be added dynamically */}
            </select>
          </div>

          {/* Credit Account Filter */}
          <div className="filter-item">
            <label style={{ color: 'black', fontWeight: 'bold' }}>Credit Account</label>
            <select value={creditAccount} onChange={(e) => setCreditAccount(e.target.value)}>
              <option value="">Select</option>
              {/* Credit account options will be added dynamically */}
            </select>
          </div>

          {/* User Filter */}
          <div className="filter-item">
            <label style={{ color: 'black', fontWeight: 'bold' }}>Users</label>
            <select value={users} onChange={(e) => setUsers(e.target.value)}>
              <option value="All">All</option>
              {/* User options will be added dynamically */}
            </select>
          </div>
        </div>
      </div>

      {/* Table Controls Section */}
      <div className="table-controls">
        {/* Entries Per Page Selector */}
        <div className="entries-per-page">
          <label>Show</label>
          <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <label>entries</label>
        </div>

        {/* Export and Search Actions */}
        <div className="table-actions">
          <button>Copy</button>
          <button>Excel</button>
          <button>PDF</button>
          <button>Print</button>
          <button>CSV</button>
          <button>Columns</button>
          <input 
            type="text" 
            placeholder="Search:" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </div>

      {/* Data Table Section */}
      <table className="transfer-table">
        <thead>
          <tr>
            <th>Transfer Code</th>
            <th>Transfer Date</th>
            <th>Reference No.</th>
            <th>Debit Account</th>
            <th>Credit Account</th>
            <th>Amount</th>
            <th>Created by</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Conditional Rendering: Show message if no data is available */}
          {transfers.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-data" style={{ textAlign: 'center' }}>
                No data available in table
              </td>
            </tr>
          ) : (
            // Mapping through transfers array and rendering rows dynamically
            transfers.map((transfer) => (
              <tr key={transfer.id}>
                <td>{transfer.transferCode}</td>
                <td>{transfer.transferDate}</td>
                <td>{transfer.referenceNo}</td>
                <td>{transfer.debitAccount}</td>
                <td>{transfer.creditAccount}</td>
                <td>{transfer.amount}</td>
                <td>{transfer.createdBy}</td>
                <td>
                  <button className="action-btn">Action</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Section */}
      <div className="pagination">
        <div className="pagination-info">Showing 0 to 0 of 0 entries</div>
        <div className="pagination-controls">
          <button className="pagination-btn">Previous</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransferList; // Exporting the component for use
