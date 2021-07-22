import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./UserList.module.css";

export default function UserList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://site-layout-default-rtdb.europe-west1.firebasedatabase.app/Users.json"
      )
      .then((res) => res.data)
      .then(
        (result) => {
          setIsLoaded(true);
          if (result != null) {
            const tempUsers = [];
            Object.values(result).forEach((user) => tempUsers.push(user));
            setUsers(tempUsers);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return users.map((user) => {
      return (
        <div className={classes.user}>
          <h2>Имя: {user.name}</h2>
          <p>Возраст: {user.age}</p>
          <p>Род занятий: {user.profession}</p>
        </div>
      );
    });
  }
}
