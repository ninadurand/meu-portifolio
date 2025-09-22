export default function CustomTheme() {
  return (
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        html {
          background-color: #3b0764;
        }
        body { 
          font-family: 'Inter', sans-serif; 
          background-color: #3b0764;
        }
        .page-container { padding-top: 110px; }
        @media (min-width: 768px) {
          .page-container { padding-top: 80px; }
        }
        .bg-purple-dark { background-color: #3b0764; }
        .bg-purple-medium { background-color: #5a189a; }
        .bg-purple-light { background-color: #7b2cbf; }
        .text-pink { color: #f72585; }
        .border-pink { border-color: #f72585 !important; }
        .btn-pink {
          background-color: #f72585; color: white; border-color: #f72585;
        }
        .btn-pink:hover {
          background-color: #d90467; border-color: #d90467; color: white;
        }
        .btn-outline-pink {
          color: #f72585; border-color: #f72585;
        }
        .btn-outline-pink:hover {
          background-color: #f72585; color: white;
        }
        .navbar {
          background-color: rgba(30, 0, 50, 0.8) !important;
          backdrop-filter: blur(10px);
        }
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 .5rem 1rem rgba(247, 37, 133, .25)!important;
        }
      `}
    </style>
  )
}
