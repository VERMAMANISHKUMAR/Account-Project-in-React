// import React, { useRef, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link
// import { FaFileCsv, FaFilePdf, FaPrint, FaFileExcel, FaCopy, FaSort } from 'react-icons/fa';
// import { jsPDF } from 'jspdf';
// import autoTable from 'jspdf-autotable';
// import * as XLSX from 'xlsx';
// import '../assets/Style/Portfolio.css';

// const AccountList = () => {
//   const accounts = [
//     { accountNumber: 'AC/05/0003', accountName: 'nb', parentAccountName: '', balance: 0.00, createdBy: 'tech' },
//     { accountNumber: 'AC/05/0002', accountName: 'van2', parentAccountName: '', balance: 2488.00, createdBy: 'inspiredgrow@gmail.com' },
//   ];

//   const tableRef = useRef();
//   const [hiddenColumns, setHiddenColumns] = useState([]);

//   const copyToClipboard = () => {
//     let text = accounts.map(acc => Object.values(acc).join('\t')).join('\n');
//     navigator.clipboard.writeText(text);
//     alert('Copied to clipboard!');
//   };

//   const exportToCSV = () => {
//     let csv = accounts.map(acc => Object.values(acc).join(',')).join('\n');
//     const blob = new Blob([csv], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'accounts.csv';
//     a.click();
//   };

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(accounts);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Accounts');
//     XLSX.writeFile(wb, 'accounts.xlsx');
//   };

//   const exportToPDF = () => {
//     const doc = new jsPDF();
//     autoTable(doc, { html: tableRef.current });
//     doc.save('accounts.pdf');
//   };

//   const printTable = () => {
//     window.print();
//   };

//   const toggleColumn = (index) => {
//     setHiddenColumns(prev =>
//       prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//     );
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <div>
//           <h1>Accounts List <span className="subheader">View/Search Accounts</span></h1>
          
//         </div>
//         <nav>
//           <Link to="/home">Home</Link> / <Link to="#">Accounts List</Link>
//         </nav>
//       </div>

//       <div className="controls">
//         <div className="entries">
//           <label htmlFor="showEntries">Show</label>
//           <select id="showEntries">
//             <option value="10">10</option>
//             <option value="25">25</option>
//             <option value="50">50</option>
//             <option value="100">100</option>
//           </select>
//           <span>Entries</span>
//         </div>
//         <Link to="/inputs"><button className='Create-Account'>+ Create Account</button></Link>
        
//         <div className="actions">
//           <button onClick={copyToClipboard}><FaCopy /> Copy</button>
//           <button onClick={exportToExcel}><FaFileExcel /> Excel</button>
//           <button onClick={exportToPDF}><FaFilePdf /> PDF</button>
//           <button onClick={printTable}><FaPrint /> Print</button>
//           <button onClick={exportToCSV}><FaFileCsv /> CSV</button>
//           <button onClick={() => toggleColumn(2)}><FaSort /> Toggle Parent Column</button>
//           <input type="text" placeholder="Search..." />
//         </div>
//       </div>

//       <table className="account-table" ref={tableRef}>
//         <thead>
//           <tr>
//             <th>Account Number</th>
//             <th>Account Name</th>
//             {!hiddenColumns.includes(2) && <th>Account Holder Name</th>}
//             <th>Balance</th>
//             <th>Created By</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {accounts.map((account, index) => (
//             <tr key={index}>
//               <td>{account.accountNumber}</td>
//               <td>{account.accountName}</td>
//               {!hiddenColumns.includes(2) && <td>{account.parentAccountName || 'N/A'}</td>}
//               <td>${account.balance.toFixed(2)}</td>
//               <td>{account.createdBy}</td>
//               <td><button className="action-btn">Action ▼</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <span>Showing 1 to {accounts.length} of {accounts.length} entries</span>
//         <div>
//           <button>Previous</button>
//           <button className="active">1</button>
//           <button>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountList;

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFileCsv, FaFilePdf, FaPrint, FaFileExcel, FaCopy, FaSort } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import '../assets/Style/Portfolio.css';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const tableRef = useRef();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/accounts');
        if (!response.ok) throw new Error('Failed to fetch accounts');
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const copyToClipboard = () => {
    let text = accounts.map(acc => Object.values(acc).join('\t')).join('\n');
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const exportToCSV = () => {
    let csv = accounts.map(acc => Object.values(acc).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'accounts.csv';
    a.click();
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(accounts);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Accounts');
    XLSX.writeFile(wb, 'accounts.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, { html: tableRef.current });
    doc.save('accounts.pdf');
  };

  const printTable = () => {
    window.print();
  };

  const toggleColumn = (index) => {
    setHiddenColumns(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = accounts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(accounts.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
