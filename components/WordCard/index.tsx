import classNames from "classnames";
import { useState } from "react";
import styles from "./styles.module.scss";

interface WordCardProps {
  word: string;
  type: string;
}

export default function WordCard({ word, type }: WordCardProps) {
  const [progress, setProgress] = useState(0);
  const [intervalState, setIntervalState] = useState<
    NodeJS.Timeout | string | number | undefined
  >();

  const handleClick = () => {
    if (progress === 0) {
      setProgress(0);
      let newProgress = 0;

      setIntervalState(
        setInterval(() => {
          newProgress += 1;
          setProgress(newProgress);
          if (newProgress >= 100) {
            clearInterval(intervalState);
          }
        }, 20)
      );
    } else if (progress > 0) {
      if (intervalState) {
        clearInterval(intervalState);
      }
      setProgress(0);
    }
  };

  console.log(progress);

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={classNames(styles.card, styles[type])}>{word}</div>
      <svg
        className={styles.progressBorder}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect
          className={styles.rectProgress}
          x="1.5"
          y="1"
          width="97%"
          height="98%"
          ry="8"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: 400 - (progress / 100) * 400, // Заполнение
          }}
        />
      </svg>
    </div>
  );
}
