import './App.css'
import ClientandIntro from './components/ClientandIntro'
import FlightPlanner from './components/FlightPlanner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Posters from './components/Posters'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Posters />
      <main className="main-container">
        <section className="flightplanner">
          <FlightPlanner />
        </section>
        <section className="clientintro">
          <ClientandIntro />
        </section>
      </main>
        <Footer/>
    </>
  )
}

export default App
