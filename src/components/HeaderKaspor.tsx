'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Col, Input, message, Modal, Row, theme } from 'antd';
import { darkenColor } from '@/utils/color';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { createFormEntry } from '@/services/api';
import { useRouter } from 'next/navigation';

export default function HeaderKaspor() {
  const pathname = usePathname();
  const { token } = theme.useToken();
  const [mobileOpen, setMobileOpen] = useState(false);
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
      message.error('Lütfen tüm alanları doldurun');
      // message.success('Form başarıyla gönderildi');

  const { name, surname, email, tel, desc } = formState;
  
  if (!name || !surname || !email || !tel ) {
    setShowErrors(true);
    message.error('Lütfen tüm alanları doldurun');
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

      message.error('Form gönderildi ancak bir sorun oluştu.');
    }
  } catch (error) {
    console.error(error);
    message.error('Form gönderilirken bir hata oluştu');
  } finally {
    setLoading(false);
  }
};


  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);



  const menuItems = [
    { label: 'ANASAYFA', href: '/' },
    { label: 'HAKKIMIZDA', href: '/hakkimizda' },
    { label: 'REFERANSLAR', href: '/referanslar' },
    { label: 'ÜRÜNLER', href: '/kategoriler' },
    { label: 'İLETİŞİM', href: '/iletisim' },
  ];

  return (
    <header
      style={{
        backgroundColor: token.colorBgBase,
        boxShadow: token.boxShadowSecondary,
        zIndex: 1000,
        position: 'sticky',
        top: 0,
      }}
    >
      <div
        style={{
          height: 100,
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="Kaspor Logo" width={180} height={60} />
        </Link>

        {/* Mobile Menü Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-toggle"
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        {/* Desktop Menü */}
        <div className="header-right">
          <nav className="main-menu">
            {menuItems.map((item) => (
              <Link style={{ fontFamily: 'var(--font-montserrat)' }}
                key={item.href}
                href={item.href}
                className={`menu-link ${pathname.startsWith(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

       <div className="menu-buttons">
  {['Teklif Al', '0 531 087 50 63', '0216 592 75 42'].map((label, index) => (
    <button
      key={index}
      className="kaspor-btn"
      onClick={index === 0 ? showModal : undefined} // Sadece ilk butona tıklandığında çalışır
    >
      {label}
    </button>
  ))}
</div>

        </div>
      </div>

      {/* Mobil Menü */}
      {mobileOpen && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              
              className={`menu-link ${pathname.startsWith(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          {['Teklif Al', '0 531 087 50 63', '0216 592 75 42'].map((label, index) => (
            <button key={index} 
                    onClick={index === 0 ? showModal : undefined} // ✅ sadece "Teklif Al" butonu modal açar

            className="kaspor-btn">{label}</button>
          ))}
        </div>
      )}

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

      {/* Stil Tanımları */}
      <style jsx>{`
        .mobile-toggle {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .main-menu {
          display: flex;
          gap: 24px;
        }

        .menu-link {
          font-family: var(--font-montserrat);
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
          color: #333;
          letter-spacing: 0.3px;
          text-decoration: none;
          transition: color 0.2s;
        }

        .menu-link.active {
          color: ${token.colorPrimary};
          font-weight: 700;
        }

        .menu-buttons {
          display: flex;
          gap: 12px;
        }

        .kaspor-btn {
          background-color: ${token.colorPrimary};
          color: ${token.colorWhite};
          border: none;
          padding: 12px 20px;
          font-weight: ${token.fontWeightStrong};
          font-size: 14px;
          border-radius: ${token.borderRadius}px;
          cursor: pointer;
          min-width: 160px;
          box-shadow: none;
          transition: all 0.3s ease;
          font-family: var(--font-montserrat);
          text-transform: uppercase;
        }

        .kaspor-btn:hover {
          background-color: ${darkenColor(token.colorPrimary, 10)};
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
          background-color: #fff;
          border-top: 1px solid #eee;
        }

        @media (max-width: 992px) {
          .header-right {
            display: none !important;
          }

          .mobile-toggle {
            display: block !important;
          }
        }

        @media (min-width: 992px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
