"use client";

import WordsGrid from "@/components/WordsGrid";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <WordsGrid />
      <div className={styles.block}></div>
    </div>
  );
}
