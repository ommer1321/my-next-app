'use client';

import TripoModel from '@/components/chestpress';
import Image from 'next/image';

export default function Page() {
  return (
    <main style={{ padding: 20, background: '#111', minHeight: '100vh', color: '#fff' }}>
      {/* Logo ve Başlık */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '30px',
        flexWrap: 'wrap',
      }}>
        <Image src="/logo-dark.png" alt="Kaspor Logo" width={120} height={30} />
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#ccc',
          margin: 0
        }}>
          3D Model Viewer
        </h1>
      </div>

      {/* 3D Model */}
      <TripoModel />

      {/* Ürün Bilgileri */}
      <div style={{ marginTop: '24px', textAlign: 'center', color: '#ccc' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>Kaspor® ABDOMINAL OBLIQUE CRUNCH</h2>
        <p style={{ fontSize: '14px' }}>
          Göğüs kaslarınızı hedefleyen, sağlam ve ergonomik tasarımıyla üst düzey bir fitness ekipmanı.
        </p>
      </div>

      {/* Teknik Özellikler */}
      <div style={{
        background: '#222',
        borderRadius: '10px',
        padding: '16px',
        marginTop: '20px',
        color: '#aaa',
        fontSize: '14px',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <p><strong>Model Kodu:</strong> CP-01</p>
        <p><strong>Ağırlık:</strong> 85 kg</p>
        <p><strong>Malzeme:</strong> Çelik gövde, PU döşeme</p>
        <p><strong>Kullanım Alanı:</strong> Salon tipi</p>
      </div>

      

      {/* Diğer Ürünler Linki */}
    </main>
  );
}
