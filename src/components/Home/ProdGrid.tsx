'use client';

import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  title: string;
  href: string;
  image: string;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <>
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={index < 2 || index >= 6 ? 12 : 6}
          >
            <Link href={product.href}>
              <div className="product-card">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1000}
                  height={1000}
                  className="product-image"
                />
                <div className="product-overlay">
                  <span>{product.title}</span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>

      <style jsx global>{`
        .product-card {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 1 / 1;
        }

        .product-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
          transition: all 0.4s ease;
          display: block;
        }

        .product-card:hover .product-image {
          opacity: 0.7;
          transform: scale(1.02);
        }

        .product-overlay {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background-color: #b40024;
          color: white;
          font-weight: 600;
          font-size: 13px;
          padding: 4px 12px;
          border-radius: 4px;
          font-family: var(--font-montserrat);
        }
      `}</style>
    </>
  );
}