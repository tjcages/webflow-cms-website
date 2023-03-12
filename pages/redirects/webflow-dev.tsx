import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { code, state } = router.query as { code: string; state: string };

    var baseUri = "exp://127.0.0.1:19000/--/";
    if (/android/i.test(navigator.userAgent)) {
      baseUri = "exp://10.0.0.208:19000/--/";
    }

    if (code && state) {
      const href =
        baseUri +
        "?" +
        "code=" +
        encodeURIComponent(code) +
        "&state=" +
        encodeURIComponent(state);
        
        console.log(href);
      window.location.href = href;
    }
  });

  return (
    <>
      <Head>
        <title>Webflow CMS | Dev</title>
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
