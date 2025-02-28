import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/Style/AccountForm.css";

const AccountForm = () => {
  const [accountData, setAccountData] = useState({
    accountName: "Current",
    accountHolderName: "",
    balance: "",
    createdBy: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "balance" && value < 0) return; // Prevent negative balances

    setAccountData({ ...accountData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(accountData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create account");
      }

      const result = await response.json();
      toast.success(" Account Created Successfully!", {
          style: { marginTop: "40px" }
        });

      console.log("Response:", result);

      // Reset form
      setAccountData({ accountName: "Current", accountHolderName: "", balance: "", createdBy: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error(" Error creating account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="account-form-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account Name:</label>
          <input
            type="text"
            name="accountName"
            value={accountData.accountName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Account Holder Name:</label>
          <input
            type="text"
            name="accountHolderName"
            value={accountData.accountHolderName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Balance:</label>
          <input
            type="number"
            name="balance"
            value={accountData.balance}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div>
          <label>Created By:</label>
          <input
            type="text"
            name="createdBy"
            value={accountData.createdBy}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default AccountForm;
