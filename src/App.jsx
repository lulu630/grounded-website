import Services from "./Components/Services"
import Intro from "./Components/Intro"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import "./App.css"


function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />


      </main>
    </>
  )
}

export default App

