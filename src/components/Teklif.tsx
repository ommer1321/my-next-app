'use client';

import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from 'antd';
import ReactDOMServer from 'react-dom/server';

const urunler = [
  { ad: 'Belt Assisted Deep Squat', gorsel: '/kasspor-sıralı-1.jpg' },
  { ad: 'Chest Press Machine', gorsel: '/kasspor-hk.jpg' },
  { ad: 'Lat Pulldown Pro', gorsel: '/kasspor-sıralı-1.jpg' },
  { ad: 'Leg Curl Bench', gorsel: '/kasspor-sıralı-1.jpg' },
];
type CartItem = {
  id: string;
  name: string;
  imageUrl: string;
};
export default function TeklifPdfListesi({ urunler }: { urunler: CartItem[] }) {
  const teklifRef = useRef<HTMLDivElement>(null);


  
  const handlePdfExport = async () => {
    const element = teklifRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      useCORS: true,
      backgroundColor: '#ffffff',
      scale: 2,
      windowHeight: element.scrollHeight,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.85);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
    pdf.save('teklif-listesi.pdf');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <div
        ref={teklifRef}
        style={{
          maxWidth: '840px',
          margin: '0 auto',
          padding: '40px',
          backgroundColor: '#ffffff',
          color: '#111827',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Segoe UI, sans-serif',
        }}
      >
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '32px', color: '#1f2937' }}>
          💼 Fiyat Teklif Listesi
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {urunler.map((urun, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: '#fefefe',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #ddd',
                }}
              >
                <img
                  src={urun.imageUrl}
                  alt={urun.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '16px', fontWeight: 600 }}>{urun.name}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '48px',
            padding: '32px',
            background: 'linear-gradient(to right, #b91c1c, #b91c1c)',
            color: '#fff',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '12px' }}>
            Hala düşünüyor musunuz?
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Zorunluluk içermeyen bir fiyat teklifi almaktan çekinmeyin!
          </p>
        </div>

        <footer
          style={{
            marginTop: '48px',
            backgroundColor: '#111',
            color: '#d1d5db',
            padding: '24px',
            borderRadius: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div style={{ flex: '1 1 250px' }}>
            <img
              src="/logo-dark.png"
              alt="Kas Spor"
              style={{ height: '40px', marginBottom: '12px' }}
            />
            <p style={{ fontSize: '14px' }}>
              Bizi daha yakından tanımak ve ürünlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
            <p style={{ fontSize: '14px', marginTop: '12px' }}>
              <strong>Adres:</strong> Adil Mahallesi Yakuphan Caddesi Gülbahar Sokak No: 7/19<br />
              Sultanbeyli / İSTANBUL
            </p>
          </div>

          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>İletişim</h4>
            <p><strong>Telefon:</strong> 0216 592 75 42</p>
            <p><strong>GSM:</strong> +90 531 087 50 63</p>
            <p><strong>Bilgi:</strong> info@kasspor.com.tr</p>
            <p><strong>Satış:</strong> satis@kasspor.com.tr</p>
          </div>
        </footer>
      </div>

    
    </div>
  );
}


export const TeklifPdfListesiPDFExport = async (urunler: CartItem[]) => {
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  document.body.appendChild(container);

  const html = ReactDOMServer.renderToStaticMarkup(
    <TeklifPdfListesi urunler={urunler} />
  );
  container.innerHTML = html;

  const canvas = await html2canvas(container, {
    useCORS: true,
    backgroundColor: '#fff',
    scale: 5,
    windowHeight: container.scrollHeight,
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.85);
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
  pdf.save('teklif.pdf');

  document.body.removeChild(container);
};

