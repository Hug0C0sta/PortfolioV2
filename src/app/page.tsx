import {Contact} from "./components/contact/contact";
import {Education} from "./components/education/education";
import {Experience} from "./components/experience/experience";
import {Header} from "./components/header/header";
import {Languages} from "./components/languages/languages";
import "./styles/home.scss";

export default function Home() {


    return (
        <main className="container">
            <Header/>
            <Contact/>
            <Experience/>
            <Languages/>
            <Education/>
        </main>
    );
}
