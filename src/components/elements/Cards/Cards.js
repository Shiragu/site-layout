import classes from "./Cards.module.css";
import { useEffect, useState } from "react";

export default function Cards() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
    return <div className={classes.loader}>Загрузка...</div>;
  } else {
    return (
      <section>
        <div className={classes["card-plate"]}>
          {/* {items.map((item, index) => {
          return (
            <div className={classes.card} key={index}>
              <div className={classes.hot}>{item.id}</div>
              Полное имя: {item.name}
              <hr />
              E-mail: {item.email}
              <hr />
              Улица: {item.address.street}
              <hr />
              Название компании: {item.company.name}
            </div>
          );
        })} */}
          {items.map((item, index) => {
            while (item.id <= page) {
              return (
                <div className={classes.card} key={index}>
                  <div className={classes.hot}>{item.id}</div>
                  {item.title}
                  <hr />
                  Описание: {item.body}
                </div>
              );
            }
          })}
        </div>
        <div className={classes.buttons}>
          <button
            onClick={() =>
              setPage((prev) => (prev >= 100 ? (prev = 100) : prev + 10))
            }
          >
            Показать ещё
          </button>
          <button
            onClick={() =>
              setPage((prev) => (prev <= 0 ? (prev = 0) : prev - 10))
            }
          >
            Скрыть
          </button>
        </div>
      </section>
    );
  }
}
