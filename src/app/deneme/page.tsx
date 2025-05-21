'use client';

import { Button, Col, Row, Typography } from 'antd';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

export default function FooterKaspor() {
  return (
    <div style={{ marginTop: 80 }}>
      {/* KIRMIZI ALAN */}
      <div style={{ backgroundColor: '#b40024', padding: '60px 20px', textAlign: 'center' }}>
        <Title style={{ color: '#fff' }} level={3}>Hala düşünüyor musun?</Title>
        <Paragraph style={{ color: '#fff', fontSize: 16 }}>
          Zorunluluk içermeyen bir fiyat teklifi almaktan çekinmeyin!
        </Paragraph>
        <Button size="large">Teklif Formu</Button>
      </div>

      {/* SİYAH FOOTER */}
      <div style={{ backgroundColor: '#121212', color: '#fff', padding: '60px 40px' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Image src="/logo-white.png" alt="Logo" width={120} height={40} />
            <Paragraph style={{ color: '#fff', marginTop: 16 }}>
              Bizi daha yakından tanımak ve ürünlerimiz ile ilgili daha detaylı bilgi almak için iletişime geçebilirsiniz.
            </Paragraph>
            <Paragraph strong style={{ color: '#fff' }}>
              <strong>Adres:</strong> Adil Mahallesi Yakuphan Caddesi Gülbahar Sokak No: 7/19 Sultanbeyli / İSTANBUL
            </Paragraph>
          </Col>

          <Col xs={24} md={8}>
            <Title level={5} style={{ color: '#fff' }}>İletişim Bilgileri</Title>
            <Paragraph>Telefon : 0216 592 75 42</Paragraph>
            <Paragraph>GSM : +90 531 087 50 63</Paragraph>
            <Paragraph>Bilgi: info@kasspor.com.tr</Paragraph>
            <Paragraph>Satış: satis@kasspor.com.tr</Paragraph>
          </Col>

          <Col xs={24} md={8}>
            <Title level={5} style={{ color: '#fff' }}>Hızlı Linkler</Title>
            <Paragraph>ANASAYFA</Paragraph>
            <Paragraph>HAKKIMIZDA</Paragraph>
            <Paragraph>REFERANSLAR</Paragraph>
            <Paragraph>ÜRÜNLER</Paragraph>
            <Paragraph>İLETİŞİM</Paragraph>
          </Col>
        </Row>
      </div>

      {/* SOSYAL MEDYA */}
 <div style={{ textAlign: 'center', padding: '24px 16px', backgroundColor: '#fff' }}>
  <Typography.Title level={5} style={{ color: '#b40024' }}>
    BİZİ SOSYAL MEDYADAN TAKİP EDİN
  </Typography.Title>

  <ul
    style={{
      listStyle: 'none',
      padding: 0,
      marginTop: 16,
      display: 'flex',
      justifyContent: 'center',
      gap: 24,
    }}
  >
    <li>
      <a href="https://www.facebook.com/kasspor" target="_blank" rel="noopener noreferrer" title="Facebook">
        <svg width="32" height="32" fill="#1877f2" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 
            52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 
            0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/kassportr" target="_blank" rel="noopener noreferrer" title="Instagram">
        <svg width="32" height="32" fill="#E1306C" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M224.1 141c-63.6 0-114.9 
            51.3-114.9 114.9s51.3 114.9 114.9 
            114.9S339 319.5 339 255.9 287.7 141 
            224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 
            74.7-74.7 74.7 33.5 74.7 
            74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 
            14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 
            26.8-26.8 26.8 12 26.8 26.8z" />
        </svg>
      </a>
    </li>

    <li>
      <a href="https://www.youtube.com/kasspor" target="_blank" rel="noopener noreferrer" title="YouTube">
        <svg width="32" height="32" fill="#FF0000" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 
            64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 
            24.947-48.284 48.597-11.412 42.867-11.412 
            132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 
            23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 
            288 448s170.78 0 213.371-11.486c23.497-6.321 
            42.003-24.171 48.284-47.821 11.412-42.867 
            11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM232.145 
            337.591V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
      </a>
    </li>

    <li>
      <a href="https://twitter.com/kasspor" target="_blank" rel="noopener noreferrer" title="Twitter">
        <svg width="32" height="32" fill="#1DA1F2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.026 15c6.038 0 
            9.341-5.003 9.341-9.334 0-.14 
            0-.282-.006-.422A6.685 6.685 0 0 0 16 
            3.542a6.658 6.658 0 0 1-1.889.518 
            3.301 3.301 0 0 0 1.447-1.817 
            6.533 6.533 0 0 1-2.087.793 
            3.286 3.286 0 0 0-5.593 2.994 
            9.325 9.325 0 0 1-6.767-3.429 
            3.289 3.289 0 0 0 1.018 4.382 
            3.323 3.323 0 0 1-.861-.115 
            3.283 3.283 0 0 0 3.067 2.277 
            6.588 6.588 0 0 1-4.862 1.358 
            9.344 9.344 0 0 0 5.026 1.47z" />
        </svg>
      </a>
    </li>
  </ul>
</div>

    </div>
  );
}
