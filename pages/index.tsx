import Head from "next/head";

import Header from "features/Header";
import PersonSearch from "features/PersonSearch";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Air Challenge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Description"
          content="A helpful tool for finding the person you are looking for!"
        ></meta>
      </Head>

      <Header />
      <main className={styles.content}>
        <section>
          <h1 className={styles.title}>The Person Finder</h1>
          <p className={styles.description}>
            If you just can’t find someone and need to know what they look like,
            you’ve come to the right place! Just type the name of the person you
            are looking for below into the search box!
          </p>
        </section>

        <PersonSearch />
      </main>
    </>
  );
}
