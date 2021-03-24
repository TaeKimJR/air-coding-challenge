import Head from "next/head";

import Header from "features/Header";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Air Challenge</title>
        <link rel="icon" href="/favicon.ico" />
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

        <section>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Type a name..."
          />
        </section>

        <section>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://robohash.org/rerumliberoamet.png?size=200x200&set=set1"
              alt="person's name"
            />
            <div className={styles.info}>
              <h2 className={styles.name}>Waite Merigon</h2>
              <p className={styles.personDescription}>Lorem Ipsum</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
