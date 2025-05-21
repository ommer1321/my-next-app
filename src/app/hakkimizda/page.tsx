'use client';

import { Col, Row, Typography, Divider } from 'antd';
import Image from 'next/image';

const { Title, Paragraph, Text } = Typography;

export default function HakkimizdaContent() {
  return (
<>
 
    {/* Hakkımızda Başlık ve Açıklama */}
   {/* <section style={{ backgroundColor: '#fff', padding: '80px 0 60px' }}>
      <Row justify="start">
        <Col
          xs={22}
          sm={20}
          md={16}
          lg={14}
          xl={12}
          style={{ paddingLeft: 64 }}
        >
          <Title
            level={1}
            style={{
              fontWeight: 700,
              marginBottom: 24,
              textAlign: 'left',
              fontFamily: 'var(--font-montserrat)',
            }}
          >
            Hakkımızda
          </Title>
          <Paragraph
            style={{
              fontSize: 20,
              lineHeight: 1.8,
              textAlign: 'left',
              fontFamily: 'var(--font-montserrat)',
              color: '#555',
            }}
          >
            Misyonumuz: Gerçek beden eğitimi için estetik açıdan hoş,
            işlevsel, güvenilir, uzun ömürlü ve rekabetçi fiyatlı ekipman yapmak.
            <br />
            Kas Spor "İnsana Saygı Duy ve En İyisini Üret" mottosuyla
            Yıllardır Dayanıklı Spor Alanları Üretiyor
          </Paragraph>
        </Col>
      </Row>
    </section> */}
{/*  */}









   {/* Hakkımızda Başlık ve Açıklama */}
      <section style={{ backgroundColor: '#fff', padding: '80px 60px 60px' }}>
        <Row justify="start">
          <Col
            xs={22}
            sm={20}
            md={16}
            lg={14}
            xl={12}
            style={{ paddingLeft: 64 }}
          >
            <Title
              level={1}
              style={{
                fontWeight: 700,
                marginBottom: 24,
                textAlign: 'left',
                fontFamily: 'var(--font-montserrat)',
              }}
            >
              Hakkımızda
            </Title>
            <Paragraph
              style={{
                fontSize: 20,
                lineHeight: 1.8,
                textAlign: 'left',
                fontFamily: 'var(--font-montserrat)',
                color: '#555',
              }}
            >
              Misyonumuz: Gerçek beden eğitimi için estetik açıdan hoş,
              işlevsel, güvenilir, uzun ömürlü ve rekabetçi fiyatlı ekipman yapmak.
              <br />
              Kas Spor "İnsana Saygı Duy ve En İyisini Üret" mottosuyla
              Yıllardır Dayanıklı Spor Alanları Üretiyor
            </Paragraph>
          </Col>
        </Row>
      </section>

      {/* Kas Spor Tanıtım ve Video Alanı */}
      <section style={{ backgroundColor: '#f8f8f8', padding: '80px 75px 60px' }}>
        <Row gutter={[32, 32]} justify="start" align="middle">
          {/* Sol - Metin Bloğu */}
          <Col
            xs={22}
            sm={20}
            md={16}
            lg={14}
            xl={12}
            style={{ paddingLeft: 64 }}
          >
            <Title
              level={2}
              style={{
                fontWeight: 700,
                fontFamily: 'var(--font-montserrat)',
                marginBottom: 12,
              }}
            >
              Kas Spor
            </Title>
            <div style={{ width: 40, height: 4, backgroundColor: '#000', marginBottom: 24 }} />

            <Paragraph style={{ fontSize: 18, color: '#333', fontFamily: 'var(--font-montserrat)', lineHeight: 1.75 }}>
              16 Sene önce ilk makinamızı üreterek başladığımız bu serüvene hız kesmeden devam ediyoruz 😁
            </Paragraph>

            <Paragraph style={{ fontSize: 18, color: '#333', fontFamily: 'var(--font-montserrat)', lineHeight: 1.75 }}>
              3500 M2 Kapalı ve 1250M2 Açık Üretim Alanımızla Siz Spor Severlere Dayanıklı, Estetik, Fonksiyonel Spor Aletleri Üretiyoruz.
            </Paragraph>

            <Paragraph style={{ fontSize: 18, color: '#333', fontFamily: 'var(--font-montserrat)', lineHeight: 1.75 }}>
              Kas Spor “İnsana Saygı Duy ve En İyisini Üret” Mottosuyla yıllardır dayanıklı spor alanları üretiyor.
            </Paragraph>

            <Paragraph style={{ fontSize: 18, color: '#333', fontFamily: 'var(--font-montserrat)', lineHeight: 1.75 }}>
              “Türkiye’nin En Büyük Spor Aletleri Üreticisi”
            </Paragraph>

            <Paragraph style={{ fontSize: 16, color: '#555', fontFamily: 'var(--font-montserrat)' }}>
              Kas Spor<br />
              0531 087 50 63<br />
              0216 592 75 42<br />
              www.kasspor.com.tr
            </Paragraph>
          </Col>

          {/* Sağ - Video */}
          <Col
            xs={22}
            sm={20}
            md={16}
            lg={14}
            xl={12}
            style={{ paddingLeft: 64 }}
          >
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




 <section style={{ backgroundColor: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Image
          src="/kasspor-global.jpg" // görsel adını buraya yaz (örneğin: public/images/ klasöründe olmalı)
          alt="Yurt içi salon kurulumu ve yurt dışı ihracat"
          width={900}
          height={500}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </section>






 <section style={{ backgroundColor: '#f8f8f8', padding: '10px 0' }}>
      <Row justify="center" align="middle" gutter={[32, 32]}>
        {/* Sol Görsel */}
        <Col xs={22} md={10} style={{ textAlign: 'center' }}>
          <Image
            src="/kasspor-kurulum.png" // Görselin yolu (örnek: public/images/kurulum-montaj.png)
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

</>
  );
}

// https://chatgpt.com/g/g-p-67dd60cc88d881918abc55ed6413b817-ommer1453/c/682a0486-bfcc-8009-8cbe-60bd1d158842
