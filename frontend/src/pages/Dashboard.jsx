import React from "react";
import styled from "styled-components";

// Styled-components for Dashboard layout and styling
const DashboardContainer = styled.div`
  margin-left: 25%; // Left margin for layout positioning
  padding: 20px; // Padding for spacing
  min-height: 100vh; // Ensures full-page height
  background: #f8f9fa; // Light background color
  margin-top: 35px; // Space from the top

  h1 {
    color: #2c3e50; // Dark color for title
    text-align: center; // Centers the title
  }

  .stats-container {
    display: flex; // Horizontal layout for stats
    gap: 20px; // Space between stat cards
    margin-top: 20px; // Space from the heading
  }

  .stat-card {
    background: white; // White card background
    padding: 20px; // Padding inside each card
    border-radius: 8px; // Rounded corners
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Subtle shadow effect
    text-align: center; // Centers text within the card
    flex: 1; // Equal width distribution
  }

  .stat-card h2 {
    margin: 0; // Removes default margin
    font-size: 22px; // Font size for the numbers
    color: #333; // Dark text color
  }

  .stat-card p {
    font-size: 18px; // Font size for labels
    color: #777; // Gray color for labels
  }

  .actions {
    margin-top: 30px; // Space between stats and actions
    display: flex; // Horizontal layout for buttons
    gap: 10px; // Space between buttons
    justify-content: center; // Center aligns buttons
    align-items: center; // Aligns vertically
  }

  .btn {
    background: #28a745; // Green button background
    color: white; // White text color
    border: none; // Removes border
    padding: 10px 15px; // Padding for better click area
    font-size: 14px; // Font size
    cursor: pointer; // Cursor changes to pointer on hover
    border-radius: 5px; // Rounded corners
    text-decoration: none; // Removes text underline
    transition: background 0.3s; // Smooth transition effect
  }

  .btn:hover {
    background: #218838; // Darker green on hover
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    margin-left: 0; // Removes left margin for smaller screens
    text-align: center; // Centers text

    .stats-container {
      flex-direction: column; // Stacks stats vertically on small screens
    }

    .actions {
      justify-content: center; // Centers buttons
    }
  }
`;

// Dashboard Component
const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <p style={{ textAlign: "center" }}>Welcome to your dashboard overview.</p>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>150</h2> {/* Displaying number of users */}
          <p>Users</p>
        </div>
        <div className="stat-card">
          <h2>85</h2> {/* Displaying number of transactions */}
          <p>Transactions</p>
        </div>
        <div className="stat-card">
          <h2>$12,500</h2> {/* Displaying revenue amount */}
          <p>Revenue</p>
        </div>
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="btn">View Reports</button> {/* Button to view reports */}
        <button className="btn">Manage Accounts</button> {/* Button to manage accounts */}
      </div>
    </DashboardContainer>
  );
};

export default Dashboard; // Exporting component for use
