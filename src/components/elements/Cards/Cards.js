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
        <h2 className={classes["section-title"]}>Недавние посты</h2>
        <div className={classes["card-plate"]}>
          {items.map((item, index) => {
            while (item.id <= page) {
              return (
                <div className={classes.card} key={index}>
                  <div className={classes.tag}>{item.id}</div>
                  <p className={classes["card-title"]}>{item.title}</p>
                  <p className={classes["card-description"]}>
                    Описание: {item.body}
                  </p>
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
            <div>Показать ещё</div>
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
