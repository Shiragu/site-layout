import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/users">База пользователей</NavLink>
        </li>
        <li>
          <NavLink to="/info">Информация</NavLink>
        </li>
      </ul>
    </>
  );
}
