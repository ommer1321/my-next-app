'use client';

import { Col, Row, Typography, Button } from 'antd';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { BoldOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Modal,  Input } from 'antd';
import { fetchUrunById, fetchUrunKategoriById } from '@/services/api';
import {  useParams } from 'next/navigation';
import { Urun, UrunlerResponse } from '@/intefaces/urunlerIF';
import { log } from 'console';
import { UrunKategori } from '@/intefaces/urunKategoriIF';
import Link from 'next/link';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;
const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL;





export default function UrunDetay() {
  const sliderRef = useRef<any>(null);

   const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleOk = () => {
    // form işlemleri
    setIsModalOpen(false);
  };
  const params = useParams();
  const urunSlug = params?.slug;
  const [altUrunler, setAltUrunler] = useState<UrunKategori[]>([]);
  
  const [urunler, setUrunler] = useState<Urun[]>([]);
  const kategoriSlug = altUrunler[0]?.urunKategori?.slug ;  
console.log('urunSlugaltUrunler[0]?.urunKategori?.slug:', altUrunler[0]?.urunKategori?.slug);

useEffect(() => {
  const fetchData = async () => {
    if (urunSlug) {
      try {
        const { data } = await fetchUrunById(urunSlug);

             // ❗ Eğer ürün bulunamadıysa, 404 sayfasına yönlendir
        
       
        setUrunler(data);

        // kategoriSlug'ı buradan çıkar
        const kategoriSlug = data[0]?.urun_kategori?.slug;
        if (kategoriSlug) {
          fetchKategoriData(kategoriSlug);
        }
      } catch (error) {
        console.error('Ürün verisi alınırken hata:', error);
      }
    }
  };

  const fetchKategoriData = async (slug: string) => {
    try {
      const { data } = await fetchUrunKategoriById(slug);
      setAltUrunler(data);
    } catch (error) {
      console.error('Kategori verisi alınırken hata:', error);
    }
  };

  fetchData();
}, [urunSlug]);

    console.log('urunler:2', altUrunler[0]?.urunlers || []);
const benzerUrunler = altUrunler[0]?.urunlers?.map((urun: any) => ({
  name: urun.urunName,
  slug: urun.slug,
  img: urun.urunImage?.[0]?.url
    ? `${API_BASE_URL}${urun.urunImage[0].url}`
    : null,
})) || [];



console.log('Benzer Ürünler:', benzerUrunler);  

const urunImageList = urunler[0]?.urunImage || [];
console.log(urunImageList,12345);

const productImages: string[] = urunImageList
  .map((image: any) => image?.url ? API_BASE_URL + image.url : null)
  .filter(Boolean);



  const mainSliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const similarSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
     <section style={{ background: '#fff', padding: '60px 24px' }}>
      <Row
        gutter={[48, 48]}
        align="middle"
        justify="center"
        wrap
        style={{ flexDirection: 'row' }}
      >
        {/* Görsel - Mobilde üstte, desktopta sağda */}
     <Col
  xs={{ span: 24, order: 1 }}
  md={{ span: 10, order: 2 }}
  style={{ textAlign: 'center' }}
>
  <Slider {...mainSliderSettings}>
    {(productImages.length > 1 ? productImages : [...productImages, ...productImages]).map((src, index) => (
      <div key={index}>
        <Image
          src={src}
          alt={`Ürün ${index + 1}`}
          width={800}
          height={500}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
    ))}
  </Slider>
</Col>


        {/* Yazı Alanı - Mobilde altta, desktopta solda */}
        <Col
          xs={{ span: 24, order: 2 }}
          md={{ span: 10, order: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#555',
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <Title level={1} style={{ fontWeight: 700, color: '#111' }}>
         {urunler[0]?.urunName || ''}
          </Title>

          <Paragraph  style={{ whiteSpace: 'pre-line', fontSize: '16px' ,color:"#555"}}>
             {urunler[0]?.urunDesc || ''}
          </Paragraph>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button
    type="primary"
    style={{
      width: 422,
      background: '#b40024',
      border: 'none',
      marginBottom: 12,
      fontWeight: 600,
    }}
      onClick={showModal}
  >
    Teklif Al
  </Button>
</div>
<Modal
  open={isModalOpen}
  onCancel={handleCancel}
  footer={null}
  closeIcon={
    <div
      style={{
        backgroundColor: '#b40011',
        borderRadius: '60px',
        padding: '3px 14px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s',
      }}
    >
      <span
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 1,
        }}
      >
        X
      </span>
    </div>
  }

  // 🧩 EKRANDA TAŞMA OLMASIN DİYE:
  centered={false} // ortalamayı kapat
  style={{ top: 40 }} // yukarıdan 40px boşluk
 
>
  {/* Üst Başlık */}
  <div style={{ background: '#b40024', padding: '16px', textAlign: 'center' }}>
    <h2 style={{ color: '#fff', margin: 0, fontWeight: 600 }}>TEKLİF FORMU</h2>
  </div>

  {/* Form */}
  <div style={{ padding: '32px' }}>
    <Row gutter={16}>
      <Col xs={24} sm={12}>
        <Input
          placeholder="Adı"
          size="large"
          bordered={false}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 24 }}
        />
      </Col>
      <Col xs={24} sm={12}>
        <Input
          placeholder="Soyadı"
          size="large"
          bordered={false}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 24 }}
        />
      </Col>
    </Row>

    <Row gutter={16}>
      <Col xs={24} sm={12}>
        <Input
          placeholder="E Posta"
          size="large"
          bordered={false}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 24 }}
        />
      </Col>
      <Col xs={24} sm={12}>
        <Input
          placeholder="Telefon"
          size="large"
          bordered={false}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 24 }}
        />
      </Col>
    </Row>

    <TextArea
      placeholder="Teklif Almak İstediğiniz Ürün"
      autoSize={{ minRows: 3 }}
      bordered={false}
      style={{ borderBottom: '1px solid #ccc', marginBottom: 32 }}
    />

    <Button
      type="primary"
      size="large"
      onClick={handleOk}
      style={{
        background: '#b40024',
        border: 'none',
        fontWeight: 600,
        width: 150,
        display: 'block',
        margin: '0 auto',
      }}
    >
      GÖNDER
    </Button>
  </div>
</Modal>



          <Paragraph style={{ color: '#555' }}>
            Kas Spor Garantisi <br />
            - Tüm Ürünlerimiz 2 Yıl Garanti Kapsamındadır. <br />
            - Yedek Parça ve Servis Desteği 10 Yıl Devam Etmektedir.
          </Paragraph>
        </Col>
      </Row>
    </section>
      {/* Benzer Ürünler */}
<div style={{ margin: 24 }} className="similar-slider-wrapper">
  <Title
    level={2}
    style={{
      textAlign: 'center',
      marginBottom: 36,
      fontWeight: 600,
      color: '#111',
    }}
  >
    Benzer Ürünler
  </Title>

  {/* Sol/Sağ Butonlar */}
  <Button
    className="nav-button left"
    onClick={() => sliderRef.current?.slickPrev()}
    icon={<LeftOutlined />}
  />
  <Button
    className="nav-button right"
    onClick={() => sliderRef.current?.slickNext()}
    icon={<RightOutlined />}
  />

  <Slider ref={sliderRef} {...similarSliderSettings}>
    {benzerUrunler?.map((item, idx) => (
      <div key={idx} style={{ textAlign: 'center', cursor: 'pointer' }}>
        <Link href={`/urun/${item.slug}`} style={{ textDecoration: 'none' }}>
          <div className="similar-product">
            <Image
              src={item.img || ''}
              alt={item.name}
              width={220}
              height={220}
              className="similar-product-img"
            />
          </div>
          <div className="similar-product-name">{item.name}</div>
        </Link>
      </div>
    ))}
  </Slider>
</div>


      <style jsx global>{`
        .similar-slider-wrapper {
    position: relative;
    padding: 0 32px;
  }

  .similar-slider-wrapper:hover .nav-button {
    opacity: 1;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: rgba(255, 255, 255, 0.85);
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  .nav-button.left {
    left: 0;
  }

  .nav-button.right {
    right: 0;
  }

  .similar-product {
    overflow: hidden;
    aspect-ratio: 1 / 1;
    margin: 0 5.5px; /* 11px toplam boşluk */
  }

  .similar-product-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.4s ease;
  }

  .similar-product:hover .similar-product-img {
    opacity: 0.8;
    transform: scale(1.03);
  }

  .similar-product-name {
    font-size: 14px;
    font-weight: 700;
    margin-top: 12px;
    font-family: var(--font-montserrat);
    color: #222;
    text-align: center;
  }

  /* === Mobil uyumluluk geliştirmesi === */
 
      `}</style>
    </>
  );
}









