'use client';

import { createFormEntry } from '@/services/api';
import { Button, Col, Input,  Modal, Row, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './MobileStickyBar.module.css';

import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const { Title, Paragraph, Text } = Typography;
import toast from 'react-hot-toast';
import CookieConsent from './CookieConsent';

export default function FooterKaspor() {
const [loading, setLoading] = useState(false);
const [showErrors, setShowErrors] = useState(false);

const router = useRouter();

   const [isModalOpen, setIsModalOpen] = useState(false);
const [formState, setFormState] = useState({
  name: '',
  surname: '',
  email: '',
  tel: '',
  desc: '',
});


const handleOk = async () => {
      toast.error('Lütfen tüm alanları doldurun');
      // toast.success('Form başarıyla gönderildi');

  const { name, surname, email, tel, desc } = formState;
  
  if (!name || !surname || !email || !tel ) {
    setShowErrors(true);
    toast.error('Lütfen tüm alanları doldurun');
    return;
  }
  
  setLoading(true);

  try {
    const response = await createFormEntry(formState);
    const successCodes = [200, 201, 202];

    if (successCodes.includes(response?.status || 200)) {
    setIsModalOpen(false);

      router.push('/tesekkurler'); // burada "router" olacak
    } else {
    setIsModalOpen(false);

      toast.error('Form gönderildi ancak bir sorun oluştu.');
    }
  } catch (error) {
    console.error(error);
    toast.error('Form gönderilirken bir hata oluştu');
  } finally {
    setLoading(false);
  }
};


  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);



  
  return (
    <footer>
        <CookieConsent />


 <div className={styles.callBox}>
      <a href="tel:+905310875063">
        <Image
          src="/597177.png"
          alt="Call"
          width={20}
          height={20}
        />
        Hemen Ara
      </a>
    </div>



 <a
      href="https://wa.me/905300272457"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <Image
        src="/733585.png"
        alt="WhatsApp"
        width={32}
        height={32}
      />
    </a>

      {/* Üst Kırmızı Alan */}
      <div style={{ backgroundColor: '#b40024', padding: '30px 20px', textAlign: 'center' }}>
        <Title style={{ color: '#fff', fontSize: '36px', fontWeight: 800 }} level={2}>Hala düşünüyor musun?</Title>
        <Paragraph style={{ color: '#fff', fontSize: 18, marginBottom: 24 }}>
          Zorunluluk içermeyen bir fiyat teklifi almaktan çekinmeyin!
        </Paragraph>
        <Button
  size="large"
  type="default"
  onClick={showModal}
  style={{ marginTop: 8, fontWeight: 600 }}
>
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
              <li><Link href="/kategoriler" style={{ color: '#fff' }}>ÜRÜNLER</Link></li>
              <li><Link href="/iletisim" style={{ color: '#fff' }}>İLETİŞİM</Link></li>
              <li><Link href="/iade-sartlari" style={{ color: '#fff' }}>İADE ŞARTLARI</Link></li>
              <li><Link href="/mesafeli-satis-sozlesmesi" style={{ color: '#fff' }}>MESAFELİ SATIŞ SÖZLEŞMESİ</Link></li>
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
    <a href="https://instagram.com/kassportr" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C' }}>
      <FaInstagram size={32} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }}>
      <FaYoutube size={32} />
    </a>
   
  </div>
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
 {/* Form */}
  {/* Form */}
  <div style={{ padding: '32px' }}>
    <Row gutter={16}>
      <Col xs={24} sm={12}>
        <Input
          placeholder="Adı"
          size="large"
          bordered={false}
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 24 }}
        />
         {!formState.name && showErrors && (
        <div style={{ color: 'red', fontSize: 12, marginBottom: 20 }}>Adı alanı zorunludur.</div>
      )}
      </Col>
      <Col xs={24} sm={12}>
        <Input
          placeholder="Soyadı"
          size="large"
          bordered={false}
           value={formState.surname}
            onChange={(e) => setFormState({ ...formState, surname: e.target.value })}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 24 }}
        />
         {!formState.surname && showErrors && (
        <div style={{ color: 'red', fontSize: 12, marginBottom: 20 }}>Soyadı alanı zorunludur.</div>
      )}
      </Col>
    </Row>

    <Row gutter={16}>
      <Col xs={24} sm={12}>
        <Input
          placeholder="E Posta"
          size="large"
          bordered={false}
           value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 24 }}
        />
         {!formState.email && showErrors && (
        <div style={{ color: 'red', fontSize: 12, marginBottom: 20 }}>E-posta alanı zorunludur.</div>
      )}
      </Col>
      <Col xs={24} sm={12}>
        <Input
          placeholder="Telefon"
          size="large"
          bordered={false}
           value={formState.tel}
            onChange={(e) => setFormState({ ...formState, tel: e.target.value })}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 24 }}
        />
         {!formState.tel && showErrors && (
        <div style={{ color: 'red', fontSize: 12, marginBottom: 20 }}>Telefon alanı zorunludur.</div>
      )}
      </Col>
    </Row>

    <TextArea
      placeholder="Teklif Almak İstediğiniz Ürün"
      autoSize={{ minRows: 3 }}
      bordered={false}
   value={formState.desc}
    onChange={(e) => setFormState({ ...formState, desc: e.target.value })}
      style={{ borderBottom: '1px solid #ccc', marginBottom: 32 }}
    />

    <Button
      type="primary"
      size="large"
        loading={loading} // burada gösteriliyor
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


      {/* Telif Hakkı */}
      <div style={{ textAlign: 'center', padding: '10px', backgroundColor: '#fff', fontSize: 13, color: '#999' }}>
        Copyright 2025. All Right Reserved.
      </div>
    </footer>
  );
}
