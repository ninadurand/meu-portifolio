import { useState } from 'react';

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const drawings = [
    { title: 'Contra Cardume', image: 'Desenhos/Contra_cardume.jpeg' },
    { title: 'O Tigre', image: 'Desenhos/O_Tigre.jpeg' },
    { title: 'Inverso de Mim', image: 'Desenhos/Inverso_de_mim.jpeg' },
    { title: 'Rascunho', image: 'Desenhos/Rascunho.jpeg' },
  ];

  const digitals = [
    { title: 'Cardume Digital', image: 'Desenhos/cardume_digital.jpg' },
    { title: 'Vrum Vrum', image: 'Desenhos/Vrum_Vrum.jpg' },
    { title: 'Nosferatu', image: 'Desenhos/Nosferatu.jpg' },
    { title: 'O -', image: 'Desenhos/O -.jpg' },
  ];

  return (
    <div className="page-container min-vh-100 bg-purple-dark text-white d-flex flex-column align-items-center justify-content-center px-5 pb-5">


      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} className="modal-img" />
            <p className="mt-3 text-center text-white">{selectedImage.title}</p>
            <button className="btn btn-outline-light mt-2" onClick={() => setSelectedImage(null)}>Fechar</button>
          </div>
        </div>
      )}

      <div className="container text-center mb-5">
        <h2 className="display-4 fw-bold mb-5 text-pink">Meus Desenhos</h2>
        <div className="row g-4 justify-content-center">
          {drawings.map((drawing, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-lg border-0 project-card bg-purple-medium text-white">
                <img
                  src={drawing.image}
                  alt={drawing.title}
                  className="card-img-top bg-dark"
                  style={{ height: '250px', objectFit: 'contain', cursor: 'pointer' }}
                  onClick={() => setSelectedImage(drawing)}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-pink">{drawing.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-5 text-pink">Minhas Ilustrações Digitais</h2>
        <div className="row g-4 justify-content-center">
          {digitals.map((drawing, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-lg border-0 project-card bg-purple-medium text-white">
                <img
                  src={drawing.image}
                  alt={drawing.title}
                  className="card-img-top bg-dark"
                  style={{ height: '250px', objectFit: 'contain', cursor: 'pointer' }}
                  onClick={() => setSelectedImage(drawing)}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-pink">{drawing.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


     <style jsx>{`
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 20px;
      }

      .modal-content {
        max-width: 100%;
        max-height: 100%;
        text-align: center;
      }

      .modal-img {
        max-width: 90vw;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
      }

      @media (max-width: 768px) {
        .modal-img {
          max-width: 95vw;
          max-height: 70vh;
        }
      }
    `}</style>

    </div>
  );
}
