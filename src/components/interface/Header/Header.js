import Menu from "../../navigation/Menu/Menu";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.copyright}>
        <div className={classes.logo}>Shi-Ra</div>
        <div className={classes.title}>Сайт со всяким</div>
      </div>
      <Menu />
    </header>
  );
}
