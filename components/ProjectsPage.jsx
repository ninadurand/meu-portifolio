export default function ProjectsPage() {
   const drawings = [
    { title: 'Contra Cardume', image:'Desenhos/Contra_cardume.jpeg' },
    { title: 'O Tigre', image: 'Desenhos/O_tigre.jpeg' },
    { title: 'Inverso de Mim', image: 'Desenhos/Inverso_de_mim.jpeg' },
    { title: 'Rascunho', image: 'Desenhos/Rascunho.jpeg' },
  ]

  return (
    <div className="page-container min-vh-100 bg-purple-dark text-white d-flex align-items-center justify-content-center px-5 pb-5">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-5 text-pink">Meus Desenhos</h2>
        <div className="row g-4 justify-content-center">
          {drawings.map((drawing, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-lg border-0 project-card bg-purple-medium text-white">
                <img
                src={drawing.image}
                alt={drawing.title}
                className="card-img-top bg-dark"
                style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-pink">{drawing.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}