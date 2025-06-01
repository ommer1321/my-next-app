'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from 'antd';
import { darkenColor } from '@/utils/color';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';





export default function HeaderKaspor() {
  const pathname = usePathname();
  const { token } = theme.useToken();
  const [mobileOpen, setMobileOpen] = useState(false);


  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };

  handleResize(); // initial run
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);



  const menuItems = [
    { label: 'ANASAYFA', href: '/' },
    { label: 'HAKKIMIZDA', href: '/hakkimizda' },
    { label: 'REFERANSLAR', href: '/referanslar' },
    { label: 'ÜRÜNLER', href: '/urunler' },
    { label: 'İLETİŞİM', href: '/iletisim' },
  ];

  const getButtonStyle = (): React.CSSProperties => ({
    backgroundColor: token.colorPrimary,
    color: token.colorWhite,
    border: 'none',
    padding: '12px 20px',
    fontWeight: token.fontWeightStrong,
    fontSize: 14,
    borderRadius: token.borderRadius,
    cursor: 'pointer',
    minWidth: 160,
    boxShadow: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'var(--font-montserrat)',
    textTransform: 'uppercase',
  });

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

        {/* Mobil Menü Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            fontSize: 24,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#333',
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>




   {!isMobile && (
  <div
    className="header-right"
    // style={{
    //   display: 'flex',
    //   alignItems: 'center',
    //   gap: 32,
    // }}
  >
          {/* Menü */}
          <nav className="main-menu" style={{ display: 'flex', gap: 24 }}>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: pathname === item.href ? 700 : 500,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  color: pathname === item.href ? token.colorPrimary : '#333',
                  letterSpacing: '0.3px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Butonlar */}
          <div className="menu-buttons" style={{ display: 'flex', gap: 12 }}>
            {['Teklif Al', '0 531 087 50 63', '0216 592 75 42'].map((label, index) => (
              <button
                key={index}
                style={getButtonStyle()}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = darkenColor(token.colorPrimary, 10);
                  el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = token.colorPrimary;
                  el.style.boxShadow = 'none';
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      </div> 

      {/* Mobil Açılır Menü */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            padding: 24,
            backgroundColor: '#fff',
            borderTop: '1px solid #eee',
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontWeight: 500,
                fontSize: 16,
                color: pathname === item.href ? token.colorPrimary : '#333',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
          {['Teklif Al', '0 531 087 50 63', '0216 592 75 42'].map((label, index) => (
            <button key={index} style={getButtonStyle()}>{label}</button>
          ))}
        </div>
      )}

      {/* Basit stil override */}
    <style jsx>{`
  @media (max-width: 991px) {
    .header-right {
      display: none;
    }
    .mobile-toggle {
      display: block !important;
    }
  }

  @media (min-width: 992px) {
    .header-right {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .mobile-toggle {
      display: none !important;
    }
  }
`}</style>

    </header>
  );
}
