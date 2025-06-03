'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from 'antd';
import { darkenColor } from '@/utils/color';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function HeaderKaspor() {
  const pathname = usePathname();
  const { token } = theme.useToken();

  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'ANASAYFA', href: '/' },
    { label: 'HAKKIMIZDA', href: '/hakkimizda' },
    { label: 'REFERANSLAR', href: '/referanslar' },
    { label: 'ÜRÜNLER', href: '/urunler' },
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

        {/* Mobil Menü Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-toggle"
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        {/* Masaüstü Menü */}
        <div className="header-right">
          <nav className="main-menu">
            {menuItems.map((item) => (
              <Link
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
              <button key={index} className="kaspor-btn">
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
            <button key={index} className="kaspor-btn">{label}</button>
          ))}
        </div>
      )}

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
