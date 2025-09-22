export default function HomePage() {
  return (
    <div className="page-container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-purple-dark text-white px-5 pb-5">
      <div className="text-center">
        <img
          src="minha-foto.jpeg"
          alt="Minha Foto"
          className="rounded-circle border border-2 border-pink shadow-lg mx-auto mb-4"
          style={{ width: '200px', height: '200px' }}
        />
        <h1 className="display-3 fw-bolder mb-2 text-pink">Olá, sou Marina Durand</h1>
        <p className="fs-4 text-white-50">
          Sou estudante de Computação e gosto de Desenhar.
        </p>
        <div className="mt-4 d-flex gap-3 justify-content-center">
          <a
            href="https://www.linkedin.com/in/marina-durand-a71150307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pink btn-lg rounded-pill px-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ninadurand"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-pink btn-lg rounded-pill px-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
