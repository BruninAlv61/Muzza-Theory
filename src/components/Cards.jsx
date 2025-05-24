import '../assets/styles/Cards.css'

export const Cards = () => {
  return (
    <article className="cards__container">
      <section className="cards">
        <img src="/icons/pizza.png" alt="" />
        <h4>Ingredientes Premium</h4>
        <p>
          Seleccionamos los mejores ingredientes para crear pizzas de calidad
          excepcional.
        </p>
      </section>
      <section className="cards">
        <img src="/icons/clock.png" alt="" />
        <h4>Entrega Rápida</h4>
        <p>Tu pedido estará listo para recoger en menos de 30 minutos.</p>
      </section>
      <section className="cards">
        <img src="/icons/star.png" alt="" />
        <h4>Recetas Auténticas</h4>
        <p>
          Nuestras pizzas siguen la verdadera tradición italiana con un toque
          moderno.
        </p>
      </section>
    </article>
  )
}
