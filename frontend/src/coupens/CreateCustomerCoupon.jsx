import React from 'react';
import '../assets/Style/Coupon/CreateCustomerCoupon.css';

function CreateCustomerCoupon() {
  return (
    <div className="add-update-brand-container">
      <div className="header">
        <div className="title">Add/Update Brand</div>
        <div className="navigation">
          <a href="#">Home</a>
          <span>&gt;</span>
          <a href="#">Brands List</a>
        </div>
      </div>

      <div className="error-message">Please Enter Valid Data</div>

      <div className="form">
        <div className="form-row">
          <label htmlFor="customerName">Customer Name*</label>
          <div className="input-with-dropdown">
            <input type="text" id="customerName" value="Walk-in customer" readOnly />
            <div className="dropdown-arrow">&#x25BC;</div> 
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="occasionName">Occasion Name*</label>
          <select id="occasionName">
            <option value="">No Records Found</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="couponCode">Coupon Code*</label>
          <div className="input-with-icon">
            <input type="text" id="couponCode" />
            <div className="icon">&#x2713;</div> 
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="expireDate">Expire Date</label>
          <input type="date" id="expireDate" />
        </div>

        <div className="form-row">
          <label htmlFor="couponValue">Coupon Value</label>
          <input type="text" id="couponValue" />
        </div>

        <div className="form-row">
          <label htmlFor="couponType">Coupon Type</label>
          <input type="text" id="couponType" />
        </div>

        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="4"></textarea>
        </div>

        <div className="button-row">
          <button className="save-button">Save</button>
          <button className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default CreateCustomerCoupon;