import React from 'react';
import '../assets/Style/Home.css'; // Import your CSS file

const AccountDashboard = () => {
  return (
    <div className="account-dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="time-filters">
        <button className="time-filter active">Today</button>
        <button className="time-filter">Weekly</button>
        <button className="time-filter">Monthly</button>
        <button className="time-filter">Yearly</button>
        <button className="time-filter">All</button>
      </div>

      <div className="metrics-grid">
        <div className="metric-card purchase-due">
          <div className="metric-value">₹15000</div>
          <div className="metric-label">PURCHASE DUE</div>
        </div>

        <div className="metric-card sales-due">
          <div className="metric-value">₹2000</div>
          <div className="metric-label">SALES DUE</div>
        </div>

        <div className="metric-card sales">
          <div className="metric-value">₹20000</div>
          <div className="metric-label">SALES</div>
        </div>

        <div className="metric-card expense">
          <div className="metric-value">₹5000</div>
          <div className="metric-label">EXPENSE</div>
        </div>

        <div className="metric-card customers">
          <div className="metric-value">4</div>
          <div className="metric-label">CUSTOMERS</div>
        </div>

        <div className="metric-card suppliers">
          <div className="metric-value">5</div>
          <div className="metric-label">SUPPLIERS</div>
        </div>

        <div className="metric-card purchases">
          <div className="metric-value">0</div>
          <div className="metric-label">PURCHASES</div>
        </div>

        <div className="metric-card invoices">
          <div className="metric-value">0</div>
          <div className="metric-label">INVOICES</div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;