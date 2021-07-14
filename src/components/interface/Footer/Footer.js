import classes from "./Footer.module.css";
import Menu from "../../navigation/Menu/Menu";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-logo"]}>Лого компании</div>
      <Menu />
      <div className={classes["footer-copyright"]}>Копирайт разработчика</div>
    </footer>
  );
}
