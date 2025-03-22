import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

function Header()  {
  return (
    <nav>
      <Link to="/Home">Главная</Link>
      <Link to="/Catalog">Каталог</Link>
      <Link to="/Feedback">Отзывы</Link>
      <Link to="/Cart">Корзина</Link>
    </nav>
  )
}

export default Header
