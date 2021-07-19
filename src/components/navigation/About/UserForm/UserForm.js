import axios from "axios";
import { useState } from "react";
import classes from "./UserForm.module.css";

export default function UserForm() {
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
      <button onClick={() => addUser()}>Добавить пользователя</button>
    </section>
  );
}
