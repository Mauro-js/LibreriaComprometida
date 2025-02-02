import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function PDF({}) {
  return (
    <>
      <Head>
        <title>Libreria comprometida</title>
        <meta name="description" content="Store as test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe src="/teologos.pdf" width="100%" height="100%" />
        </div>
      </main>
    </>
  );
}
