export default function Spinner() {
  return (
    <>
      <div className="content">
      <div className="html-spinner"></div>
      <p>Cargando...</p>
      </div>

      <style jsx>{`
        .content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-top: 25px;
        }

        .html-spinner {
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
