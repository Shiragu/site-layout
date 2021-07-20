import classes from "./Footer.module.css";
import Menu from "../../navigation/Menu/Menu";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-contacts"]}>Контактная информация</div>
      <nav className={classes["footer-menu"]}>
        <h3>Быстрая навигация</h3>
        <Menu />
      </nav>
      <div className={classes["footer-copyright"]}>Сайт для тестов всякого</div>
    </footer>
  );
}
