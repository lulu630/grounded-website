import Cta from "./Components/Cta"
import Bedrifter from "./Components/Bedrifter"
import Services from "./Components/Services"
import Intro from "./Components/Intro"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import "./App.css"


function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Bedrifter />
        <About />
        <Cta />

  

      </main>
    </>
  )
}

export default App

