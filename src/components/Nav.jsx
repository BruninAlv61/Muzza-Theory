import '../assets/styles/Nav.css'

export const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__h1">Muzza Theory</h1>
      <ul className="navbar__ul">
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Combos & Offers</a>
        </li>
        <li>
          <a href="#">Branches</a>
        </li>
      </ul>

      <button>Login</button>
      <img src="/icons/menu.svg" alt="Menu Icon, click here to see the menu" />
    </nav>
  )
}
