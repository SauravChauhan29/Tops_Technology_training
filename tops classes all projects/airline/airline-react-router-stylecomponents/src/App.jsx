import { Outlet } from 'react-router-dom'
import './App.css'
import ClientandIntro from './components/ClientandIntro'
import FlightPlanner from './components/FlightPlanner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Posters from './components/Posters'
import Navbar_page from './components/Navbar/Navbar_page'

function HomeLayout() {
  return (
    <>
      <Posters />
      {/* <Outlet /> */}
      <main className="main-container">
      
        <section className="flightplanner">
          <FlightPlanner />
        </section>
       
        <section className="clientintro container container-top-p-0">
          <Navbar_page />
          
          <Outlet />
        </section>
      </main>
    </>
  )
}

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <HomeLayout />
      <Footer />
    </>
  )
}

export default App
