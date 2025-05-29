import './assets/styles/App.css'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Cards } from './components/Cards.jsx'
import { PediOnline } from './components/PediOnline.jsx'
import { ComboOffers } from './components/ComboOffers.jsx'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="main">
        <Cards />
        <PediOnline />
        <ComboOffers />
      </main>
    </>
  )
}

export default App
