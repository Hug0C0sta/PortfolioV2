import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Languages } from "./components/languages/languages";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Contact />
      <Experience />
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
