import UserList from "../../elements/UserList/UserList";
import UserForm from "../../elements/UserForm/UserForm";
import classes from "./UsersPage.module.css";
import { useState } from "react";

export default function UsersPage() {
  const [visible, setVisible] = useState(classes.hidden);

  function toggleVisible() {
    visible === classes.userform
      ? setVisible(classes.hidden)
      : setVisible(classes.userform);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>База пользователей</h1>
      <button onClick={toggleVisible} className={classes["show-button"]}>
        Добавить пользователя
      </button>
      <div className={visible}>
        <UserForm visible={toggleVisible} />
      </div>
      <div className={classes.userlist}>
        <UserList />
      </div>
    </>
  );
}
