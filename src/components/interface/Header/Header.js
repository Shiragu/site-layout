import Menu from "../../navigation/Menu/Menu";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.copyright}>
        <div className={classes.logo}>Лого компании</div>
        <div className={classes.phone}>Наш телефон: +7 999 999-99-99</div>
      </div>
      <Menu />
    </header>
  );
}
