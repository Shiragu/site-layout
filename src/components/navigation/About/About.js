import AboutInput from "../../elements/AboutInput/AboutInput";
import ComplexDiv from "../../elements/ComplexDiv/ComplexDiv";
import classes from "./About.module.css";

const articles = [
  {
    title: "Первый заголовок",
    firstam: "Первый абзац первого заголовка",
    secondam: "Второй абзац Первого заголовка",
  },
  {
    title: "Второй заголовок",
    firstam: "Первый абзац второго заголовка",
    secondam: "Второй абзац Второго заголовка",
  },
  {
    title: "Третий заголовок",
    firstam: "Первый абзац третьего заголовка",
    secondam: "Второй абзац Третьего заголовка",
  },
  {
    title: "Четвертый заголовок",
    firstam: "Первый абзац четвертого заголовка",
    secondam: "Второй абзац Четвертого заголовка",
  },
];

export default function About() {
  return (
    <section className={classes["site-about"]}>
      {articles.map((art) => {
        return (
          <div className={classes.article}>
            <h2>{art.title}</h2>
            <hr />
            <p>{art.firstam}</p>
            <p>{art.secondam}</p>
          </div>
        );
      })}
      <div className={classes.hooks}>
        <AboutInput />
        <ComplexDiv />
      </div>
    </section>
  );
}
