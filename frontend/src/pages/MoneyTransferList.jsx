import React, { useState } from 'react'; // Importing React and useState hook for state management
import '../assets/Style/MoneyTransferList.css'; // Importing external CSS for styling
import { Link } from 'react-router-dom'; // Importing Link component for navigation

// MoneyTransferList Component
const MoneyTransferList = () => {
  // State variables to manage filters and settings
  const [transferDate, setTransferDate] = useState(''); // Stores selected transfer date
  const [debitAccount, setDebitAccount] = useState(''); // Stores selected debit account
  const [creditAccount, setCreditAccount] = useState(''); // Stores selected credit account
  const [users, setUsers] = useState('All'); // Stores selected user filter
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Controls number of entries displayed per page
  const [searchTerm, setSearchTerm] = useState(''); // Stores the search term input by user

  // Dummy data for money transfers (Replace with actual API calls)
  const transfers = [];

  return (
    <div className="money-transfer-list">
      {/* Header Section */}
      <div className="header">
        <h1>Money Transfer List <span className="subheader">View/Search Accounts</span></h1>
        <p>Home<span> / </span><span>Money Transfer List</span></p>
      </div>

      {/* Filters Section */}
      <div className="filters">
        {/* Button to create a new transfer */}
        <Link to="/inputs">
          <button className="create-transfer-btn">+ Create Transfer</button>
        </Link>

        <div className="filter-row">
          {/* Transfer Date Filter */}
          <div className="filter-item">
            <label style={{ color: 'black', fontWeight: 'bold' }}>Transfer Date</label>
            <input type="date" value={transferDate} onChange={(e) => setTransferDate(e.target.value)} />
          </div>

          {/* Debit Account Filter */}
          <div className="filter-item">
            <label style={{ color: 'black', fontWeight: 'bold' }}>Debit Account</label>
            <select value={debitAccount} onChange={(e) => setDebitAccount(e.target.value)}>
              <option value="">Select</option>
              {/* Add debit account options dynamically */}
            </select>
          </div>

          {/* Credit Account Filter */}
          <div className="filter-item">
            <label style={{ color: 'black', fontWeight: 'bold' }}>Credit Account</label>
            <select value={creditAccount} onChange={(e) => setCreditAccount(e.target.value)}>
              <option value="">Select</option>
              {/* Add credit account options dynamically */}
            </select>
          </div>

          {/* User Filter */}
          <div className="filter-item">
            <label style={{ color: 'black', fontWeight: 'bold' }}>Users</label>
            <select value={users} onChange={(e) => setUsers(e.target.value)}>
              <option value="All">All</option>
              {/* Add user options dynamically */}
            </select>
          </div>
        </div>
      </div>

      {/* Table Controls Section */}
      <div className="table-controls">
        {/* Entries Per Page Dropdown */}
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

        {/* Table Actions (Export & Search) */}
        <div className="table-actions">
          <button>Copy</button>
          <button>Excel</button>
          <button>PDF</button>
          <button>Print</button>
          <button>CSV</button>
          <button>Columns</button>
          <input type="text" placeholder="Search:" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      {/* Money Transfer Table */}
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
          {/* If no data is available, display a message */}
          {transfers.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-data" style={{ textAlign: 'center' }}>No data available in table</td>
            </tr>
          ) : (
            // Map through transfers array to display each transaction row
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
