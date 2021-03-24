import Head from "next/head";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Air Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
