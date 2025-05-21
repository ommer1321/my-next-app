'use client';

import { Col, Row,  Typography } from 'antd';
import Image from 'next/image';
import { EnvironmentOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';

const { Title, Text } = Typography;
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function ReferanslarContent() {
  const referanslar = [
    { name: 'Ramada', src: '/referanslar/referanslar-1.png' },
    { name: 'Sivas Demirspor', src: '/referanslar/referanslar-1.png' },
    { name: 'DoubleTree by Hilton', src: '/referanslar/referanslar-1.png' },
    { name: 'New Park Hotel', src: '/referanslar/referanslar-1.png' },
    { name: 'New Park Hotel', src: '/referanslar/referanslar-1.png' },
    { name: 'New Park Hotel', src: '/referanslar/referanslar-1.png' },
    { name: 'New Park Hotel', src: '/referanslar/referanslar-1.png' },
    { name: 'New Park Hotel', src: '/referanslar/referanslar-1.png' },
  ];

const textReferanslar = [
  { name: 'Nizip Spor Lisesi', location: 'Nizip' },
  { name: 'Berke Çakmak ( PT)', location: 'Şişli İstanbul' },
  { name: 'Ali Karaali ( PT)', location: 'Hatay' },
  { name: 'Hulk Gym', location: 'Beykoz İstanbul' },
  { name: 'Old School Gym', location: 'Esenyurt İstanbul' },
  { name: 'Mist İnşaat', location: 'Üsküdar İstanbul' },
  { name: 'Mist İnşaat', location: 'Üsküdar İstanbul' },
  { name: 'Emrecan Eren', location: 'Denizli' },
  { name: 'Gökhan Özer', location: 'Ankara' },
  { name: 'Ufuk Hoca Spor Salonu', location: 'Mersin' },
  { name: 'Hasan Yıldız (PT)', location: 'Nizip Gaziantep' },
  { name: 'Erol Yılmaz Sosyal Bilimler Lisesi', location: 'Antalya' },
];

 const logos = [
  '/referanslar/referanslar-1.png',
  '/referanslar/referanslar-2.png',
  '/referanslar/referanslar-1.png',
  '/referanslar/referanslar-1.png',
  '/referanslar/referanslar-1.png',
  '/referanslar/referanslar-1.png',
  '/referanslar/referanslar-1.png',
  '/referanslar/referanslar-1.png',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (

    <>
    
    <section style={{ padding: '80px 40px', backgroundColor: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Title level={2} style={{ fontFamily: 'var(--font-montserrat)' }}>
          REFERANSLAR
        </Title>
        <div style={{ width: 50, height: 3, backgroundColor: '#000', margin: '0 auto' }} />
      </div>

      <Row gutter={[32, 32]} justify="center">
        {referanslar.map((item, index) => (
          <Col
          key={index}
          xs={20}
          sm={12}
          md={8}
          lg={6}
          style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: 260,
                aspectRatio: '1/1',
                backgroundColor: '#fff',
                border: '2px solid #eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24,
              }}
              >
              <Image
                src={item.src}
                alt={item.name}
                width={200}
                height={200}
                style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </div>
          </Col>
        ))}
      </Row>
    </section>
        
         <section style={{ backgroundColor: '#fff', padding: '80px 0',overflow: 'hidden' }}>
      <Row gutter={[32, 32]} justify="center">
        {textReferanslar.map((ref, index) => (
          <Col
            key={index}
            xs={22}
            sm={12}
            md={12}
            lg={8}
            xl={6}
            style={{ textAlign: 'center', borderBottom: '1px solid #eee', paddingBottom: 24 }}
          >
            <Text style={{ fontSize: 18, fontWeight: 600, fontFamily: 'var(--font-montserrat)' }}>{ref.name}</Text>
            <div style={{ marginTop: 8, color: '#555' }}>
              <EnvironmentOutlined style={{ marginRight: 6 }} />
              <Text style={{ fontSize: 14 }}>{ref.location}</Text>
            </div>
          </Col>
        ))}
      </Row>
    </section>


     <section style={{ padding: '60px 0', background: '#fff' }}>
      <Row justify="center" style={{ marginBottom: 32 }}>
        <Col>
          <Title level={4} style={{ textAlign: 'center', fontWeight: 600 }}>Benzer Ürünler</Title>
          <div style={{ width: 40, height: 4, background: '#000', margin: '8px auto 0' }} />
        </Col>
      </Row>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 32px' }}>
        <Slider {...settings}>
          {logos.map((src, idx) => (
            <div key={idx} style={{ padding: '0 10px', textAlign: 'center' }}>
              <Image src={src} alt={`Logo ${idx + 1}`} width={140} height={140} style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
        
        </>
  );
}
