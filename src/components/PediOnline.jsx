import '../assets/styles/PediOnline.css'

export const PediOnline = () => {
  return (
    <article className="pediOnline">
      <h3>Pedí Online</h3>
      <p>Elegí la forma más cómoda de disfrutar nuestras pizzas</p>

      <section className="cards__container">
        <section className="card">
          <img
            className="pedidosya-img"
            src="/backgrounds/pedidosya.webp"
            alt="logo de pedidos ya"
          />
          <h4>Delivery a Domicilio</h4>
          <p>Recibí tu pizza favorita en la comodidad de tu hogar</p>
          <ul>
            <li>Entrega en 30-45 minutos</li>
            <li>Seguimiento en tiempo real</li>
            <li>Pago online seguro</li>
            <li>Promociones exclusivas</li>
          </ul>
          <a href="https://pedidosya.com.ar">Pedir por PedidosYa</a>
        </section>
        <section className="card">
          <img src="/icons/shop.png" alt="logo de pedidos ya" />
          <h4>Retiro en Local</h4>
          <p>Retirá tu pedido en cualquiera de nuestras sucursales</p>
          <ul>
            <li>Listo en 20-30 minutos</li>
            <li>Sin costo de envío</li>
            <li>Pago en efectivo o tarjeta</li>
            <li>Descuentos especiales</li>
          </ul>
          <a href="#">Ordenar para PickUp</a>
        </section>
      </section>
    </article>
  )
}
