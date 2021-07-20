import AboutInput from "../../elements/AboutInput/AboutInput";
import UserList from "../../elements/UserList/UserList";
import UserForm from "../../elements/UserForm/UserForm";
import classes from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <section className={classes["site-about"]}>
      <h1 style={{ textAlign: "center" }}>Список пользователей</h1>
      <div className={classes.userlist}>
        <UserList />
      </div>
      <div className={classes.hooks}>
        <UserForm />
        <AboutInput />
      </div>
    </section>
  );
}
