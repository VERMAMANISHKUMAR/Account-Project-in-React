import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  margin-left: 25%;
  padding: 20px;
  min-height: 100vh;
  background: #f8f9fa;
  margin-top:35px;

  h1 {
    color: #2c3e50;
    text-align: center;
  }

  .stats-container {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }

  .stat-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex: 1;
  }

  .stat-card h2 {
    margin: 0;
    font-size: 22px;
    color: #333;
  }

  .stat-card p {
    font-size: 18px;
    color: #777;
    
  }

  .actions {
    margin-top: 30px;
    display: flex;
    gap: 10px;
  
    justify-content: center; 
    align-items: center;
  }

  .btn {
    background: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s;
  }

  .btn:hover {
    background: #218838;
  }

  /* Responsive */
  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;

    .stats-container {
      flex-direction: column;
    }

    .actions {
      justify-content: center;
    }
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <p style={{textAlign:'center'}}>Welcome to your dashboard overview.</p>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>150</h2>
          <p>Users</p>
        </div>
        <div className="stat-card">
          <h2>85</h2>
          <p>Transactions</p>
        </div>
        <div className="stat-card">
          <h2>$12,500</h2>
          <p>Revenue</p>
        </div>
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="btn">View Reports</button>
        <button className="btn">Manage Accounts</button>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
