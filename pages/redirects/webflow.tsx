import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Webflow CMS</title>
        <meta
          name="description"
          content="An on-the-go editor for Webflow CMS content."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <h1>WebflowCMS</h1>
          </div>
          <p>Redirecting back to the app...</p>
        </div>
      </main>
    </>
  );
}
