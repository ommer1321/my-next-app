'use client';

import { Button, Col, Row, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const { Title, Paragraph, Text } = Typography;

export default function FooterKaspor() {
  return (
    <footer>
      {/* Üst Kırmızı Alan */}
      <div style={{ backgroundColor: '#b40024', padding: '30px 20px', textAlign: 'center' }}>
        <Title style={{ color: '#fff', fontSize: '36px', fontWeight: 800 }} level={2}>Hala düşünüyor musun?</Title>
        <Paragraph style={{ color: '#fff', fontSize: 18, marginBottom: 24 }}>
          Zorunluluk içermeyen bir fiyat teklifi almaktan çekinmeyin!
        </Paragraph>
        <Button size="large" type="default" style={{ marginTop: 8, fontWeight: 600 }}>
          Teklif Formu
        </Button>
      </div>

      {/* Siyah Ana Footer */}
      <div style={{ backgroundColor: '#111', color: '#fff', padding: '50px 50px 30px' }}>
        <Row gutter={[32, 32]} justify="center" align="top">
          {/* Sol */}
          <Col xs={24} md={8} style={{ textAlign: 'left' }}>
            <Image src="/logo-dark.png" alt="Logo" width={140} height={40} />
            <Paragraph style={{ marginTop: 16, color: '#ccc' }}>
              Bizi daha yakından tanımak ve ürünlerimiz ile ilgili daha detaylı bilgi almak için iletişime geçebilirsiniz.
            </Paragraph>
            <Text style={{ color: '#ccc', margin: 0 }} strong>Adres:</Text>
            <Paragraph style={{ color: '#ccc', margin: 0 }}>
              Adil Mahallesi Yakuphan Caddesi Gülbahar Sokak No: 7/19 Sultanbeyli / İSTANBUL
            </Paragraph>
          </Col>

          {/* Orta */}
          <Col xs={24} md={8} style={{ textAlign: 'left' }}>
            <Title level={5} style={{ color: '#fff' }}>İletişim Bilgileri</Title>
            <Paragraph style={{ color: '#ccc', marginBottom: 8 }}>
              <strong>Telefon:</strong> 0216 592 75 42<br />
              <strong>GSM:</strong> +90 531 087 50 63<br />
              <strong>Bilgi:</strong> info@kasspor.com.tr<br />
              <strong>Satış:</strong> satis@kasspor.com.tr
            </Paragraph>
          </Col>

          {/* Sağ */}
          <Col xs={24} md={8} style={{ textAlign: 'left' }}>
            <Title level={5} style={{ color: '#fff' }}>Hızlı Linkler</Title>
            <ul style={{ listStyle: 'none', padding: 0, color: '#fff', lineHeight: 2, fontWeight: 500 }}>
              <li><Link href="/" style={{ color: '#fff' }}>ANASAYFA</Link></li>
              <li><Link href="/hakkimizda" style={{ color: '#fff' }}>HAKKIMIZDA</Link></li>
              <li><Link href="/referanslar" style={{ color: '#fff' }}>REFERANSLAR</Link></li>
              <li><Link href="/urunler" style={{ color: '#fff' }}>ÜRÜNLER</Link></li>
              <li><Link href="/iletisim" style={{ color: '#fff' }}>İLETİŞİM</Link></li>
            </ul>
          </Col>
        </Row>
      </div>


{/* Sosyal Medya Alanı */}
<div style={{ textAlign: 'center', backgroundColor: '#fff', padding: '10px 16px' }}>
  <Title level={5} style={{ color: '#b40024', marginBottom: 20 }}>
    BİZİ SOSYAL MEDYADAN TAKİP EDİN
  </Title>

  <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
    <a href="https://facebook.com/kasspor" target="_blank" rel="noopener noreferrer" style={{ color: '#3b5998' }}>
      <FaFacebookF size={32} />
    </a>
    <a href="https://instagram.com/kasspor" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C' }}>
      <FaInstagram size={32} />
    </a>
    <a href="https://youtube.com/kasspor" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }}>
      <FaYoutube size={32} />
    </a>
    <a href="https://twitter.com/kasspor" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }}>
      <FaTwitter size={32} />
    </a>
  </div>
</div>


      {/* Telif Hakkı */}
      <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#fff', fontSize: 13, color: '#999' }}>
        Copyright 2025. All Right Reserved.
      </div>
    </footer>
  );
}
