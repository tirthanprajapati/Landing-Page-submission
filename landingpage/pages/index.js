import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/navbar";
import logo2 from "../public/logo2.png";
import img1 from "../public/1.jpg"
import img2 from "../public/2.jpg"
import img3 from "../public/4.jpg"
import img4 from "../public/4.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Learn to Code from here" />
        <link rel="icon" href="/loogo.ico" />
      </Head>
      <div className={styles.hmead}>
        <Image src={logo2} height="90%" width="252%"  />
        <button className={styles.butt}>
        <span className={styles.button_top}> Login / Sign Up
        </span>
        </button>
      </div>
      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="../index.js">"Hello World"</a>
        </h1>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
          <Image src={img1} />
            <h2>Hello World Pro &rarr;</h2>
            <p>Unlock all the pro features like debugging and solutions.Lorem Ipsum Aliquam commodo, diam ac.</p>
          </a>

          <a href="/" className={styles.card}>
          <Image src={img2} />
            <h2>Learn &rarr;</h2>
            <p>Learn more about algorithms and Data structure in an interactive course with problems!</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
          <Image src={img3} />
            <h2>Staters 51 &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, diam ac fermentum rhoncus, erat nulla interdum metus, eget fermentum..</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
          <Image src={img4} />
            <h2>About Hello World &rarr;</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ligula dapibus elit semper hendrerit. In fermentum orci nisl, quis.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
