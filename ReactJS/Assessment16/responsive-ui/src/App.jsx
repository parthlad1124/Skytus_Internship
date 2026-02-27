import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CardsSection from "./components/CardsSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <CardsSection />
      <Footer />
    </div>
  )
}

export default App