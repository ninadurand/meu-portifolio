export default function CustomTheme() {
  return (
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        html {
          background-color: #1e2a38; /* Azul marinho */
        }
        body { 
          font-family: 'Inter', sans-serif; 
          background-color: #1e2a38;
          color: #FFD3E9;
        }

        .page-container { padding-top: 110px; }
        @media (min-width: 768px) {
          .page-container { padding-top: 80px; }
        }

        /* Tons suaves com base na nova paleta */
        .bg-navy-dark { background-color: #1e2a38; } /* Fundo principal */
        .bg-navy-medium { background-color: #2c3a4c; } /* Um pouco mais claro */
        .bg-navy-light { background-color: #3b4d63; } /* Para contraste suave */
        
        .bg-pink-light { background-color: #FFD3E9; }
        .text-pink { color: #FFD3E9; }
        .border-pink { border-color: #FFD3E9 !important; }

        .btn-pink {
          background-color: #FFD3E9; 
          color: #1e2a38; 
          border-color: #FFD3E9;
        }
        .btn-pink:hover {
          background-color: #f4bcd8; 
          border-color: #f4bcd8; 
          color: #1e2a38;
        }

        .btn-outline-pink {
          color: #FFD3E9; 
          border-color: #FFD3E9;
          background-color: transparent;
        }
        .btn-outline-pink:hover {
          background-color: #FFD3E9; 
          color: #1e2a38;
        }

        .navbar {
          background-color: rgba(30, 42, 56, 0.9) !important; /* Azul marinho com opacidade */
          backdrop-filter: blur(10px);
        }

        .project-card {
          background-color: #2c3a4c;
          border: 1px solid #FFD3E9;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: #FFD3E9;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 .5rem 1rem rgba(255, 211, 233, 0.2)!important;
        }
      `}
    </style>
  )
}
