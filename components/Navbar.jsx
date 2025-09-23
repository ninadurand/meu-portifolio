export default function Navbar({ onNavClick }) {
  const navItems = ['Início', 'Sobre Mim', 'Desenhos', 'Jogo da Forca']

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow-sm py-3">
      <div className="container d-flex flex-wrap justify-content-center justify-content-md-between">
        <a className="navbar-brand fw-bold mb-2 mb-md-0" href="#" onClick={() => onNavClick('Início')}>
          Meu Portfólio
        </a>
        <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-center gap-2">
          {navItems.map((item) => (
            <li className="nav-item" key={item}>
              <a
                className="nav-link btn btn-outline-light btn-sm px-3"
                href="#"
                onClick={() => onNavClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
