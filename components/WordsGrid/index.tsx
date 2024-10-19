import WordCard from "../WordCard";
import styles from "./styles.module.scss";

const words = [
  "Машина",
  "Дом",
  "Автомобиль",
  "Деревня",
  "Город",
  "Слово",
  "Нигер",
  "Тест",
];

const types = ["red", "blue", "gray", "black"];

export default function WordsGrid() {
  const getRandomNumber = () => Math.floor(Math.random() * words.length);
  const getRandomType = () => Math.floor(Math.random() * types.length);

  return (
    <div className={styles.grid}>
      {Array.from(Array(25)).map((_, idx) => (
        <WordCard
          key={idx}
          word={words[getRandomNumber()]}
          type={types[getRandomType()]}
        />
      ))}
    </div>
  );
}
