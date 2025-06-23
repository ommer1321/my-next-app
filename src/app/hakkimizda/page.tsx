'use client';

import { Col, Row, Typography, Grid } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import type { CSSProperties } from 'react';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function HakkimizdaContent() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const paragraphStyle: CSSProperties = {
    fontSize: isMobile ? 16 : 20,
    lineHeight: 1.8,
    textAlign: 'left',
    fontFamily: 'var(--font-montserrat)',
    color: '#555',
    padding: isMobile ? '0 16px' : 0,
  };

  const titleStyle: CSSProperties = {
    fontWeight: 700,
    marginBottom: 24,
    textAlign: 'left',
    fontFamily: 'var(--font-montserrat)',
    wordBreak: 'keep-all',
    padding: isMobile ? '0 16px' : 0,
    fontSize: isMobile ? 26 : undefined,
  };

  return (
    <>


{/*   
   <Head>
        <title>{meta.data.SEO.metaTitle}</title>
        <meta name="description" content={meta.data.SEO.metaDescription} />
        <meta name="robots" content={meta.data.SEO.metaRobots} />
        <meta property="og:title" content={meta.data.SEO.metaTitle} />
        <meta property="og:description" content={meta.data.SEO.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.data.SEO.canonicalURL} />
       
      </Head> */}



      {/* Hakkımızda Başlık ve Açıklama */}
      <section style={{ backgroundColor: '#fff', padding: isMobile ? '40px 0' : '80px 60px 60px' }}>
        <Row justify="center">
          <Col xs={24} sm={22} md={16} lg={14} xl={12}>
            <Title level={1} style={titleStyle}>Hakkımızda</Title>
            <Paragraph style={paragraphStyle}>
              Misyonumuz: Gerçek beden eğitimi için estetik açıdan hoş,
              işlevsel, güvenilir, uzun ömürlü ve rekabetçi fiyatlı ekipman yapmak.
              <br />
              Kas Spor "İnsana Saygı Duy ve En İyisini Üret" mottosuyla
              Yıllardır Dayanıklı Spor Alanları Üretiyor.
            </Paragraph>
          </Col>
        </Row>
      </section>

      {/* Video ve Tanıtım */}
      <section style={{ backgroundColor: '#f8f8f8', padding: '80px 16px' }}>
        <Row gutter={[32, 32]} justify="center" align="middle">
          <Col xs={24} md={12}>
            <Title level={2} style={titleStyle}>Kas Spor</Title>
            <div style={{ width: 40, height: 4, backgroundColor: '#000', marginBottom: 24 }} />
            <Paragraph style={paragraphStyle}>
              16 Sene önce ilk makinamızı üreterek başladığımız bu serüvene hız kesmeden devam ediyoruz 😁
            </Paragraph>
            <Paragraph style={paragraphStyle}>
              3500 M2 Kapalı ve 1250M2 Açık Üretim Alanımızla Siz Spor Severlere Dayanıklı, Estetik, Fonksiyonel Spor Aletleri Üretiyoruz.
            </Paragraph>
            <Paragraph style={paragraphStyle}>
              Kas Spor “İnsana Saygı Duy ve En İyisini Üret” Mottosuyla yıllardır dayanıklı spor alanları üretiyor.
            </Paragraph>
            <Paragraph style={paragraphStyle}>
              “Türkiye’nin En Büyük Spor Aletleri Üreticisi”
            </Paragraph>
            <Paragraph style={{ ...paragraphStyle, fontSize: 15 }}>
              Kas Spor<br />
              0531 087 50 63<br />
              0216 592 75 42<br />
              www.kasspor.com.tr
            </Paragraph>
          </Col>

          <Col xs={24} md={10}>
            <video
              src="hakkimizda-video.m4v"
              autoPlay
              loop
              playsInline
              muted
              controls
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Col>
        </Row>
      </section>

      {/* Global Görsel */}
      <section style={{ backgroundColor: '#fff', padding: '20px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <Image
            src="/kasspor-global.jpg"
            alt="Yurt içi salon kurulumu ve yurt dışı ihracat"
            width={900}
            height={500}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

<Row style={{ backgroundColor: '#fff', padding: '40px 16px' }}>









 <section style={{ backgroundColor: '#f8f8f8', padding: '10px 0' }}>
      <Row justify="center" align="middle" gutter={[32, 32]}>
        {/* Sol Görsel */}
        <Col xs={22} md={10} style={{ textAlign: 'center' }}>  <Image
            src="/kasspor-kurulum.png" // Görselin yolu (örnek: public/images/kurulum-montaj.png)
            alt="Kurulum Montaj Bize Ait"
            width={3001}
            height={3001} style={{ maxWidth: '100%', height: 'auto' }}
            />
  </Col>

        {/* Sağ Başlık ve Açıklama */}
        <Col xs={22} md={12}>
          <Title
            level={3}
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 700,
              marginBottom: 12,
            }}
            >
            Salonunuzun Kurulum ve Montajı Bize Emanet
          </Title>
          <div style={{ width: 40, height: 3, backgroundColor: '#000', marginBottom: 16 }} />
          <Paragraph
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              fontFamily: 'var(--font-montserrat)',
              color: '#444',
              marginBottom: 0,
            }}
            >
            Kas Spor sipariş sonrası süreci titizlikle takip etmekte ve
            müşterileri için kurulum montaj süreçlerini de satışa dahil etmektedir.
          </Paragraph>
        </Col>
      </Row>
    </section>


 <section style={{  padding: '10px 0' }}>
      <Row justify="center" align="middle" gutter={[32, 32]}>
       

        {/* Sağ Başlık ve Açıklama */}
        <Col xs={22} md={12}>
          <Title
            level={3}
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
           Senin Rengin Senin Dünyan

          </Title>
          <div style={{ width: 40, height: 3, backgroundColor: '#000', marginBottom: 16 }} />
          <Paragraph
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              fontFamily: 'var(--font-montserrat)',
              color: '#444',
              marginBottom: 0,
            }}
          >
           Kas Spor Renk paletinden seçeceğin renkler ile kendi makinanı kendin tasarla.
          </Paragraph>
        </Col>


 {/* Sol Görsel */}
        <Col xs={22} md={10} style={{ textAlign: 'center' }}>
          <Image
            src="/kasspor-renk.png" // Görselin yolu (örnek: public/images/kurulum-montaj.png)
            alt="Kurulum Montaj Bize Ait"
            width={3001}
            height={3001}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>


      </Row>
    </section>



 <section style={{ backgroundColor: '#f8f8f8', padding: '10px 0' }}>
      <Row justify="center" align="middle" gutter={[32, 32]}>



        
        {/* Sol Görsel */}
        <Col xs={22} md={10} style={{ textAlign: 'center' }}>
          <Image
            src="/kasspor-garanti.png" // Görselin yolu (örnek: public/images/kurulum-montaj.png)
            alt="Kurulum Montaj Bize Ait"
            width={3001}
            height={3001}
            style={{ maxWidth: '100%', height: 'auto' }}
            />
        </Col>

        {/* Sağ Başlık ve Açıklama */}
        <Col xs={22} md={12}>
          <Title
            level={3}
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 700,
              marginBottom: 12,
            }}
            >
2 Yıl Kesintisiz Ürün Garantisi
          </Title>
          <div style={{ width: 40, height: 3, backgroundColor: '#000', marginBottom: 16 }} />
          <Paragraph
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              fontFamily: 'var(--font-montserrat)',
              color: '#444',
              marginBottom: 0,
            }}
            >
           Kas Spor Ürünlerinin tamamında 2 Yıl Ürün garantisi bulunmaktadır
Müşterilerimiz ile olan birlikteliğimiz bu sayede uzun yıllar devam etmektedir.
          </Paragraph>
        </Col>
      </Row>
    </section>




 <section style={{  padding: '10px 0' }}>
      <Row justify="center" align="middle" gutter={[32, 32]}>
       

        {/* Sağ Başlık ve Açıklama */}
        <Col xs={22} md={12}>
          <Title
            level={3}
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 700,
              marginBottom: 12,
            }}
            >
10 Yıl Yedek Parça ve Teknik Servis Desteği

          </Title>
          <div style={{ width: 40, height: 3, backgroundColor: '#000', marginBottom: 16 }} />
          <Paragraph
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              fontFamily: 'var(--font-montserrat)',
              color: '#444',
              marginBottom: 0,
            }}
            >
Kas Spor Ürünlerine verdiği Garanti ile beraber Yedek Parça ve Teknik Servis Desteği de Sağlamaktadır.
Türkiye'nin farklı noktalarında bulunan teknik ekiplerimiz sizlerle satış sonrası 7/24 iletişim halinde olup herhangi bir destek durumunda bölgenize en yakın ekibi yönlendirecektir.          </Paragraph>
        </Col>


 {/* Sol Görsel */}
        <Col xs={22} md={10} style={{ textAlign: 'center' }}>
          <Image
            src="/kasspor-yedek.png" // Görselin yolu (örnek: public/images/kurulum-montaj.png)
            alt="Kurulum Montaj Bize Ait"
            width={3001}
            height={3001}
            style={{ maxWidth: '100%', height: 'auto' }}
            />
        </Col>


      </Row>
    </section>







            </Row>

    </>
  );
}