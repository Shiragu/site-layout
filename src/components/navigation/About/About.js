import AboutInput from "../../elements/AboutInput/AboutInput";
import ComplexDiv from "../../elements/ComplexDiv/ComplexDiv";
import classes from "./About.module.css";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";

export default function About() {
  return (
    <section className={classes["site-about"]}>
      <h1 style={{ textAlign: "center" }}>Список пользователей</h1>
      <div className={classes.userlist}>
        <UserList />
      </div>
      <div className={classes.hooks}>
        <UserForm />
        <AboutInput />
        <ComplexDiv />
      </div>
    </section>
  );
}
