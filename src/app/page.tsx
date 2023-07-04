import { Contact } from "./components/contact/contact";
import { Header } from "./components/header/header";
import { Languages } from "./components/languages/languages";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Contact />
      <div style={{ backgroundColor: "red" }}>
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          reiciendis blanditiis esse architecto eius molestiae odio ut aut
          laudantium dolores, voluptatum qui nesciunt dolore velit repudiandae
          nulla ratione commodi! Mollitia.
        </p>
      </div>
      <Languages />
      <div style={{ backgroundColor: "yellow" }}>
        <h2>Education</h2>
        <p>
          🎓 Computer Science Bachelors Degree - Politécnico de Viana do Castelo
        </p>
      </div>
    </main>
  );
}
