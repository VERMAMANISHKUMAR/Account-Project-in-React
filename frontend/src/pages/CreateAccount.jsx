// React ko import kar rahe hain aur useState hook ka use kar rahe hain
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toast notifications ke liye CSS import kar rahe hain
import "../assets/Style/AccountForm.css"; // Custom styling ka import

// AccountForm component define kar rahe hain
const AccountForm = () => {
  // State banayi hai jisme account ki details store hongi
  const [accountData, setAccountData] = useState({
    accountName: "Current", // Default account name
    accountHolderName: "", // Account holder ka naam
    balance: "", // Account ka balance
    createdBy: "", // Kisne create kiya hai
  });

  const [loading, setLoading] = useState(false); // Loading state handle karne ke liye

  // Form ke input fields ko handle karne ke liye function
  const handleChange = (e) => {
    const { name, value } = e.target; // Input field se name aur value le rahe hain

    if (name === "balance" && value < 0) return; // Negative balance ko prevent kar rahe hain

    setAccountData({ ...accountData, [name]: value }); // State update kar rahe hain
  };

  // Form submit karne ka function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Default form submit behavior prevent kar rahe hain
    setLoading(true); // Loading state ko true kar rahe hain

    try {
      // API call karne ke liye fetch function use kar rahe hain
      const response = await fetch("https://account-project-in-react-backend.onrender.com/api/accounts", {
        method: "POST", // POST request bhej rahe hain
        headers: {
          "Content-Type": "application/json", // JSON data bhejne ka type define kar rahe hain
        },
        body: JSON.stringify(accountData), // Data ko JSON me convert kar ke bhej rahe hain
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create account"); // Agar error aata hai to usko handle kar rahe hain
      }

      const result = await response.json(); // API response ko JSON me convert kar rahe hain
      toast.success("Account Created Successfully!", {
        style: { marginTop: "40px" },
      }); // Success message dikhane ke liye toast use kar rahe hain

      console.log("Response:", result);

      // Form reset kar rahe hain
      setAccountData({ accountName: "Current", accountHolderName: "", balance: "", createdBy: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating account. Please try again."); // Error message dikhane ke liye toast use kar rahe hain
    } finally {
      setLoading(false); // Loading state ko wapas false kar rahe hain
    }
  };

  return (
    <div className="account-form-container"> {/* Form ke container ka div */}
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}> {/* Form submit karne par handleSubmit call hoga */}
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
            min="0" // Negative value prevent karne ke liye min set kiya hai
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

        {/* Submit button */}
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Account"} {/* Button text loading state ke basis par change hoga */}
        </button>
      </form>

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default AccountForm;
