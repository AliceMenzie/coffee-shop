import React from "react";
import { Link } from "react-router-dom";
import { FiCoffee } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function NavBar() {
  return (
    <div className='nav'>
      <div className="logo">
          < FiCoffee />
      </div>
      <div className="nav-contents">
        <ul>
          <li>
            <Link className="btn-home" to={`/`}>
              Home
            </Link>
          </li>
          <li>About</li>
          <li>
            <Link className="btn-products" to={`/products`}>
              Products
            </Link>
          </li>
          <li><AiOutlineShoppingCart /></li>
        </ul>
      </div>
    </div>
  );
}
