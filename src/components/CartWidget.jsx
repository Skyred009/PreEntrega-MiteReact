import React from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function cartwidget() {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="notification">3</span> {/* Número hardcodeado */}
    </div>
  );
}

export default cartwidget;

