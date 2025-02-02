import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const generateList = (articles = []) => {
  const list = [];

  for (let i = 0; i < articles.length; i++) {
    list.push(
      <Link
        key={i}
        className={styles.card}
        target="_blank"
        href="/pdf"
        rel="noopener noreferrer"
      >
        <Image className={styles.logo} src={`/teologíaBiblica.jpg`} priority />
      </Link>
    );
  }

  return list;
};

export default function Home({ articles }) {
  const list = generateList(articles);
  return (
    <>
      <Head>
        <title>Libreria comprometida</title>
        <meta name="description" content="Store as test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>{list}</div>
      </main>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  // const res = await fetch('http://localhost:3000/api/article');
  // const articles = await res.json();

  return {
    props: {
      //   articles
      articles: [1, 2, 3, 4],
    },
  };
};
