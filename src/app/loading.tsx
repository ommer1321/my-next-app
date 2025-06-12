'use client';
export default function Loading() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-montserrat)',
      fontSize: 20
    }}>
      <div className="loader" />
      <span style={{ marginLeft: 12 }}></span>
{/* Yükleniyor... */}
      <style jsx>{`
        .loader {
          border: 4px solid #eee;
          border-top: 4px solid #b40024;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
