import classes from "./MainBanner.module.css";

export default function MainBanner() {
  return (
    <div className={classes.banner}>
      <div className={classes["banner-content"]}>
        <h1>Это сайт для тестирования всякого</h1>
        <p>
          Здесь можно понажимать всякое
          <br />И почитать всякое
        </p>
      </div>
    </div>
  );
}
