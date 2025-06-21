import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import { TagOutlined } from "@ant-design/icons";
import ProductGrid from "./ProdGrid";
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';

interface Product {
  title: string;
  href: string;
  image: string;
}

export default function UrunKategoriGrid({ products }: { products: Product[] }) {
  const images = [
    "/kasspor-sıralı-1.jpg",
    "/kasspor-sıralı-2.jpg",
    "/kasspor-sıralı-3.jpg",
  ];

  const titleStyle: CSSProperties = {
    fontSize: 45,
    fontWeight: 700,
    fontFamily: "var(--font-montserrat)",
    color: "#333",
    marginBottom: 24,
  };

  const paragraphStyle: CSSProperties = {
    fontSize: 18,
    lineHeight: 1.8,
    textAlign: "left",
    fontFamily: "var(--font-montserrat)",
    color: "#555",
  };

  const strongParagraphStyle: CSSProperties = {
    fontSize: 17,
    fontWeight: 600,
    color: "#333",
    fontFamily: "var(--font-montserrat)",
    marginTop: 32,
    marginBottom: 8,
  };

  const badgeStyle: CSSProperties = {
    display: "inline-block",
    backgroundColor: "#b40024",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 15,
    marginTop: 24,
    fontFamily: "var(--font-montserrat)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  };

  return (
    <section style={{ backgroundColor: "#fff", padding: "60px 16px" }}>
      <ProductGrid products={products} />

      <section style={{ background: "#fafafa", padding: "60px 16px" }}>
        <Row justify="center">
          <Col xs={24} sm={22} md={20} lg={16}>
            <Title level={3} style={titleStyle}>
              Yerli ve Milli Üretim
            </Title>
            <Paragraph style={paragraphStyle}>
              Kas Spor olarak Uzun Yıllardır Spor Salonu Makineleri Spor Aletleri Spor Salonu Ekipmanları üretmekteyiz.
              İstanbul Sultanbeyli’de olan fabrikamızda size özel renk tasarım seçenekleri ile kullanıcı odaklı
              makinaların üretimini gerçekleştiriyoruz.
            </Paragraph>

            <Paragraph style={strongParagraphStyle}>
              <TagOutlined style={{ marginRight: 8, color: "#ff0040" }} />
              Toplu Alışverişler'de Uygulanan Kampanyalar İçin ' Teklif Al ' Kısmından Bizlere Ulaşabilirsiniz.
            </Paragraph>
            <div style={badgeStyle}>Teklif Al</div>
          </Col>
        </Row>
      </section>

      <section style={{ background: "#f5f5f5", padding: "60px 0" }}>
        <Row justify="center" align="middle">
          <Col xs={24} md={10} style={{ padding: "0 24px" }}>
            <Title
              level={3}
              style={{
                fontSize: 31,
                fontWeight: 700,
                fontFamily: "var(--font-montserrat)",
                color: "#111",
                marginBottom: 8,
              }}
            >
              Yetkili Servis Ağı
            </Title>
            <div
              style={{
                width: 32,
                height: 2,
                backgroundColor: "#111",
                margin: "12px 0 24px",
              }}
            />
            <Paragraph
              style={{
                fontSize: 18,
                color: "#555",
                fontFamily: "var(--font-montserrat)",
                lineHeight: 1.8,
                maxWidth: 500,
              }}
            >
              Tecrübeli ve aynı zamanda alanında eğitimli Teknisyenleri içinde barındıran teknik servis ekiplerimiz ile
              anında etkili ve kalıcı çözümleri 7/24 müşterilerimize sunmaktayız.
              <br />
              <strong style={{ color: "#444" }}>SERVİS KAYDI İÇİN</strong>
            </Paragraph>
            <Button
              type="primary"
              style={{
                backgroundColor: "#c8102e",
                border: "none",
                marginTop: 24,
                fontWeight: 700,
                fontFamily: "var(--font-montserrat)",
                padding: "12px 24px",
                fontSize: 16,
              }}
              size="large"
            >
              0 531 087 50 63
            </Button>
          </Col>

          <Col xs={20} md={12} style={{ padding: "20px 0px" }}>
            <Image
              src="/kasspor-hk.jpg"
              alt="Yetkili Servis"
              width={1200}
              height={700}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </section>

      <section style={{ padding: "10px 0" }}>
        <Row justify="center" align="middle" gutter={[32, 32]}>
          <Col xs={24} md={12} style={{ textAlign: "center" }}>
            <Image
              src="/kasspor-global.jpg"
              alt="Kurulum Montaj"
              width={3001}
              height={3001}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>

          <Col xs={22} md={12}>
            <Title
              level={3}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Sadece Salonlar Değil Güzel Dostluklar Kuruyoruz
            </Title>
            <div
              style={{
                width: 40,
                height: 3,
                backgroundColor: "#000",
                marginBottom: 16,
              }}
            />
            <Paragraph
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                fontFamily: "var(--font-montserrat)",
                color: "#555",
              }}
            >
              Kas Spor <strong>"İnsana Saygı Duy ve En İyisini Üret"</strong> mottosuyla yıllardır dayanıklı spor
              alanları üretiyor.
            </Paragraph>
          </Col>
        </Row>
      </section>

      <section style={{ background: "#fff", padding: "60px 16px" }}>
        <Row gutter={[16, 16]} justify="center">
          {images.map((src, index) => (
            <Col key={index} xs={24} sm={24} md={8}>
              <div style={{ border: "1px solid #ddd", borderRadius: 6, overflow: "hidden" }}>
                <Image
                  src={src}
                  alt={`Galeri ${index + 1}`}
                  width={500}
                  height={800}
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </section>

    </section>
  );
}
