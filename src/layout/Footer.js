import React from "react";
import "./layout.css";
import * as IMAGE from "../image";
import Social from "../components/social/Social";

const Footer = () => {
  const account_link = [
    {title: "Sign in"},{title: "Register"},{title: "Order Status"},
  ]
  const help_link = [
    {title: "Shipping"},{title: "Returns"},{title: "Sizing"},
  ]
  const shop_link = [
    {title: "All Products"},{title: "Bedroom"},{title: "Dinning Room"},
  ]
  const legal_link = [
    {title: "Shipping & Delivery"},{title: "Terms & Conditions"},{title: "Privacy & Policy"},
  ]

  return (
    <footer>
      <div className="custom-container footer-wrapper">
        <div className="footer-company-data">
          <img src={IMAGE.Logo} alt="logo" />
          <Social />
          <h3 className="font-color-dark">Address</h3>
          <p className="font-color-dark">+123 654 987 877 The Bronx, NY 14568, USA</p>
        </div>

        <div className="footer-company-policy">
          <h3 className="font-color-dark">My Account</h3>
          {account_link.map((account, index) => {
              return (
                <>
                    <div key={index}>
                      <a className="font-color-dark">{account.title}</a>
                  </div>
                </>
              );
            })}
        </div>

        <div className="footer-company-policy">
          <h3 className="font-color-dark">Help</h3>
          {help_link.map((help, index) => {
              return (
                <>
                    <div key={index}>
                      <a className="font-color-dark">{help.title}</a>
                  </div>
                </>
              );
            })}
        </div>

        <div className="footer-company-policy">
          <h3 className="font-color-dark">My Account</h3>
          {shop_link.map((shop, index) => {
              return (
                <>
                    <div key={index}>
                      <a className="font-color-dark">{shop.title}</a>
                  </div>
                </>
              );
            })}
        </div>

        <div className="footer-company-policy">
          <h3 className="font-color-dark">Legal Stuff</h3>
          {legal_link.map((legal, index) => {
              return (
                <>
                    <div key={index}>
                      <a className="font-color-dark legal-title">{legal.title}</a>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;