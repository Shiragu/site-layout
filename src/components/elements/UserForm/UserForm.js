import axios from "axios";
import { useState } from "react";
import Button from "../../hoc/Button/Button";
import classes from "./UserForm.module.css";

export default function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  const addUser = () => {
    axios
      .post(
        "https://site-layout-default-rtdb.europe-west1.firebasedatabase.app/Users.json",
        {
          name,
          age,
          profession,
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <section className={classes["user-form"]}>
      <button onClick={props.visible} className={classes["close-button"]}>
        X
      </button>
      <label htmlFor="name">Имя:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="age">Возраст: </label>
      <input
        id="age"
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <label htmlFor="profession">Род занятий: </label>
      <input
        id="profession"
        type="text"
        value={profession}
        onChange={(event) => setProfession(event.target.value)}
      />
      <Button onClick={addUser} className="btn info-btn">
        Добавить пользователя
      </Button>
    </section>
  );
}
