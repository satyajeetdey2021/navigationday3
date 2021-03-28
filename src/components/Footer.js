import React from 'react';

export const Footer = () => (
    <div className="row py-3">
      <div className="col-md-7">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Privacy policy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Terms of Use</a>
          </li>
        </ul>
      </div>
      <div className="col-md text-md-right">
        <small>&copy; Ameex ShoppingList</small>
      </div>
    </div>
);