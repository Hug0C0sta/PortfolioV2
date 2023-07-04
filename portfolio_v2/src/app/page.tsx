import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <h1>Hi, i´m Hugo! 👋</h1>
          <h2>Software Developer</h2>
        </div>
        <Image
          className={styles.logo}
          src="/eu.png"
          alt="Me"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <div>
          <h2>
            <a href="https://github.com/HugoHugo">Github</a>
          </h2>
          <h2>
            <a href="https://www.linkedin.com/in/hugohugo/">LinkedIn</a>
          </h2>
          <h2>
            <a href="https://twitter.com/HugoHugo">Twitter</a>
          </h2>
        </div>
        <button>contact me </button>
      </div>
      <div>
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          reiciendis blanditiis esse architecto eius molestiae odio ut aut
          laudantium dolores, voluptatum qui nesciunt dolore velit repudiandae
          nulla ratione commodi! Mollitia.
        </p>
      </div>
      <div>
        <h2>Languages</h2>
        <p>🇵🇹 PT Native Speaker</p>
        <p>🇬🇧 EN Fluent</p>
        <p>🇪🇸 ES Fluent</p>
      </div>
      <div>
        <h2>Education</h2>
        <p>
          🎓 Computer Science Bachelors Degree - Politécnico de Viana do Castelo
        </p>
      </div>
    </main>
  );
}
