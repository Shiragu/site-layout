import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <React.Fragment>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Контакты</NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}
