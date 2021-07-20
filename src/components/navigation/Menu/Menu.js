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
          <NavLink to="/about">Всякое</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Для заметок</NavLink>
        </li>
      </ul>
    </>
  );
}
