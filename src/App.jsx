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

      </main>
    </>
  )
}

export default App

