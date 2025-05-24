import './assets/styles/App.css'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Cards } from './components/Cards.jsx'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="main">
        <Cards />
      </main>
    </>
  )
}

export default App
