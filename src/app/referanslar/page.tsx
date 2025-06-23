'use client';

import { Col, Row,  Typography } from 'antd';
import Image from 'next/image';
import { EnvironmentOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import { fetchReferanslar, fetchRefSeo } from '@/services/api';
import Head from 'next/head';

const { Title, Text } = Typography;
const Slider = dynamic(() => import('react-slick'), { ssr: false });
const { data } = await fetchReferanslar();
  const meta = await fetchRefSeo();

export default function ReferanslarContent() {
const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL;
  // console.log(data,1453);
      
  const withImage = data.filter(item => item.image && item.image.url);
  const withoutImage = data.filter(item => !item.image || !item.image.url);



  // image olanları forma uygun dönüştür
      const referanslar = withImage.map(item => ({
        name: item.referansTitle,
        src: `${API_BASE_URL}${item.image?.url || ''}`, // garantiye al
      }));

       // image olmayanları forma uygun dönüştür
      const textReferanslar = withoutImage.map(item => ({
        name: item.referansTitle,
        location: item.location || '', // location null olabilir
      }));
      

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
    



   <Head>
        <title>{meta.data.SEO.metaTitle}</title>
        <meta name="description" content={meta.data.SEO.metaDescription} />
        <meta name="robots" content={meta.data.SEO.metaRobots} />
        <meta property="og:title" content={meta.data.SEO.metaTitle} />
        <meta property="og:description" content={meta.data.SEO.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.data.SEO.canonicalURL} />
       
      </Head>


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
          {referanslar.map((item, index) => (
            <div key={index} style={{ padding: '0 10px', textAlign: 'center' }}>
              <Image src={item.src} alt={`Logo ${index + 1}`} width={140} height={140} style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
        
        </>
  );
}
