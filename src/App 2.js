import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Others from "./Components/Others/Others";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Others />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
