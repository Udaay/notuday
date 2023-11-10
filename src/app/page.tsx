import styles from "./page.module.css";
import Intro from "@/sections/Intro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
    </main>
  );
}
