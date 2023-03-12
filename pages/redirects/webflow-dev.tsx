import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [code, setCode] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { code, state } = router.query as { code: string; state: string };

    var baseUri = "exp://10.1.101.226:19000/--/";

    console.log(router)

    if (code && state) {
      setCode(code);
      setState(state);

      const href =
        baseUri +
        "?" +
        "code=" +
        encodeURIComponent(code) +
        "&state=" +
        encodeURIComponent(state);

      console.log(href);
      window.location.href = href;
    } else {
      setCode(router.asPath);
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
          <p>Dev</p>
          {code && <p>{code}</p>}
          {state && <p>{state}</p>}
          <p>Redirecting back to the app...</p>
        </div>
      </main>
    </>
  );
}
