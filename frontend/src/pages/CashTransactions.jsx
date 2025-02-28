import React, { useState } from 'react'; // React aur useState hook import kar rhe hain
import '../assets/Style/MoneyTransferList.css'; // CSS file import kar rhe hain styling ke liye

const MoneyTransferList = () => {
  const [transferDate, setTransferDate] = useState(''); // transferDate ka state manage kar rhe hain

  const [users, setUsers] = useState('All'); // Users dropdown ka state
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Kitne records ek page pe dikhane hain
  const [searchTerm, setSearchTerm] = useState(''); // Search bar ke liye state

  // Dummy data (API se data aane par yahan replace karna hoga)
  const transfers = []; 

  return (
    <div className="money-transfer-list">
      <div className="header">
        <h1>Cash Transactions<span className="subheader">View/Search Accounts</span></h1>
        <p>Home<span> / </span><span>Account List</span></p>
      </div>

      <div className="filters">
        <div className="filter-row">
          {/* Date selection inputs */}
          <div className="filter-item">
            <label style={{color:'black', fontWeight:'bold'}}>Form Date</label>
            <input type="date" value={transferDate} onChange={(e) => setTransferDate(e.target.value)} />
          </div>
          <div className="filter-item">
            <label style={{color:'black', fontWeight:'bold'}}>To Date</label>
            <input type="date" value={transferDate} onChange={(e) => setTransferDate(e.target.value)} />
          </div>
          
          {/* Users dropdown */}
          <div className="filter-item">
            <label style={{color:'black', fontWeight:'bold'}}>Users</label>
            <select value={users} onChange={(e) => setUsers(e.target.value)}>
              <option value="All">All</option>
              {/* Users dynamically add honge */}
            </select>
          </div>
        </div>
      </div>

      {/* Table controls section */}
      <div className="table-controls">
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
        <div className="table-actions">
          <button>Copy</button> {/* Table data copy karne ke liye */}
          <button>Excel</button> {/* Table ko Excel format me export */}
          <button>PDF</button> {/* Table ko PDF format me export */}
          <button>Print</button> {/* Print karne ke liye */}
          <button>CSV</button> {/* Table ko CSV me convert */}
          <button>Columns</button> {/* Column visibility toggle */}
          <input type="text" placeholder="Search:" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      {/* Transactions table */}
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
          {transfers.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-data" style={{textAlign:'center'}}>No data available in table</td>
            </tr>
          ) : (
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

      {/* Pagination */}
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

export default MoneyTransferList;
