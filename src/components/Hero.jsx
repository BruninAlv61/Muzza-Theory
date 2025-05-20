import '../assets/styles/Hero.css'

export const Hero = () => {
  return (
    <header className="hero">
      <a className="hero__newMenu" href="#">
        ¡Nuevo Menú!
      </a>
      <h2 className="hero__title">
        La mejor pizza <span>artesanal</span> de la ciudad
      </h2>
      <p>
        Ingredientes frescos, masa fermentada 48 horas y la auténtica receta
        italiana.
      </p>

      <section className="hero__buttons">
        <a className="firstButton" href="">
          Ver Menú
        </a>
        <a className="secondButton" href="">
          Nuestras Sucursales
        </a>
      </section>
    </header>
  )
}
