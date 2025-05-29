import '../assets/styles/ComboOffers.css'

export const ComboOffers = () => {
  return (
    <article className="combo-offers">
      <h4>Combos y Ofertas Especiales</h4>
      <p>Aprovecha nuestras promociones y disfruta de más por menos</p>
      <section className="item">
        <figure>
          <figcaption>
            <p>25% OFF</p>
          </figcaption>
        </figure>
        <h5>Combo Familiar</h5>
        <p>Ideal para compartir en familia o con amigos</p>

        <p className="p-incluye">Incluye:</p>
        <ul>
          <li>1 Pizza Familiar (a elección)</li>
          <li>4 Bebidas</li>
          <li>1 Orden de Pan de Ajo</li>
        </ul>
        <blockquote>
          <p>$13.000</p> <s>$16.000</s>
        </blockquote>
        <button>
          {' '}
          <img
            src="/icons/buy-car.svg"
            alt="Click aqui para agregar al carrito de compras"
          />
          Agregar
        </button>
      </section>
    </article>
  )
}
