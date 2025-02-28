import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #00283B;
  color: white;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
  position: relative;
  width: 100%;
  bottom: 0;

  .footer-content {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    
  }

  .footer-text {
    margin: 5px 0;
    opacity: 0.8;
    transition: opacity 0.3s;
  }

  .footer-text:hover {
    opacity: 1;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 12px 0;

    .footer-content {
      flex-direction: column;
      text-align: center;
      padding: 0 10px;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px 0;

    .footer-text {
      margin: 3px 0;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <p className="footer-text">
          Copyright &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="footer-text">Home Care Trading - v3.0</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
