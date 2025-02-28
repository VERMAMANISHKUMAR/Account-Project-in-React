// React aur kuch hooks aur libraries ko import kr rhe hain
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFileCsv, FaFilePdf, FaPrint, FaFileExcel, FaCopy, FaSort } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import '../assets/Style/Portfolio.css'; // CSS file import kr rhe hain

// AccountList naam ka component bana rhe hain
const AccountList = () => {
  // State variables declare kr rhe hain
  const [accounts, setAccounts] = useState([]); // Accounts ka data store krne ke liye
  const [loading, setLoading] = useState(true); // Data load ho rha hai ya nahi
  const [error, setError] = useState(''); // Error message store krne ke liye
  const [hiddenColumns, setHiddenColumns] = useState([]); // Hidden columns track krne ke liye
  const [currentPage, setCurrentPage] = useState(1); // Pagination ke liye current page
  const recordsPerPage = 4; // Har page pe kitne records honge
  const tableRef = useRef(); // Table reference ke liye

  // useEffect hook se API call kr rhe hain jab component mount hota hai
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/accounts'); // API se data fetch kr rhe hain
        if (!response.ok) throw new Error('Failed to fetch accounts');
        const data = await response.json(); // JSON format me data convert kr rhe hain
        setAccounts(data); // Accounts state update kr rhe hain
      } catch (error) {
        setError(error.message); // Error handle kr rhe hain
      } finally {
        setLoading(false); // Loading complete ho gaya
      }
    };
    
    fetchAccounts(); // Function call kr rhe hain
  }, []);

  // Data ko clipboard pe copy krne ka function
  const copyToClipboard = () => {
    let text = accounts.map(acc => Object.values(acc).join('\t')).join('\n');
    navigator.clipboard.writeText(text); // Clipboard me copy kr rhe hain
    alert('Copied to clipboard!'); // Confirmation alert
  };

  // CSV file export krne ka function
  const exportToCSV = () => {
    let csv = accounts.map(acc => Object.values(acc).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'accounts.csv';
    a.click();
  };

  // Excel file export krne ka function
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(accounts);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Accounts');
    XLSX.writeFile(wb, 'accounts.xlsx');
  };

  // PDF export krne ka function
  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, { html: tableRef.current });
    doc.save('accounts.pdf');
  };

  // Table print krne ka function
  const printTable = () => {
    window.print();
  };

  // Table column toggle krne ka function
  const toggleColumn = (index) => {
    setHiddenColumns(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // Pagination ke liye calculations
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = accounts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(accounts.length / recordsPerPage);

  // Next page function
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page function
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Accounts List <span className="subheader">View/Search Accounts</span></h1>
        <nav>
          <Link to="/home">Home</Link> / <Link to="#">Accounts List</Link>
        </nav>
      </div>

      <div className="controls">
        <Link to="/inputs">
          <button className='Create-Account'>+ Create Account</button>
        </Link>
        
        <div className="actions">
          <button onClick={copyToClipboard}><FaCopy /> Copy</button>
          <button onClick={exportToExcel}><FaFileExcel /> Excel</button>
          <button onClick={exportToPDF}><FaFilePdf /> PDF</button>
          <button onClick={printTable}><FaPrint /> Print</button>
          <button onClick={exportToCSV}><FaFileCsv /> CSV</button>
          <button onClick={() => toggleColumn(2)}><FaSort /> Toggle Parent Column</button>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {loading ? (
        <p>Loading accounts...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <table className="account-table" ref={tableRef}>
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Account Name</th>
              {!hiddenColumns.includes(2) && <th>Account Holder Name</th>}
              <th>Balance</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((account, index) => (
              <tr key={index}>
                <td>{account.accountNumber}</td>
                <td>{account.accountName}</td>
                {!hiddenColumns.includes(2) && <td>{account.parentAccountName || 'N/A'}</td>}
                <td>${account.balance.toFixed(2)}</td>
                <td>{account.createdBy}</td>
                <td><button className="action-btn">Action ▼</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default AccountList;
