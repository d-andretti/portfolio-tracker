import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio Tracker",
  description: "Track performance of stocks and crypto in one place",
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>Homepage</main>
    </>
  );
}
