"use client";

import { Col, Row, Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

export default function IletisimPage() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "60px 16px" }}>
      {/* Başlık */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title
          level={3}
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
        >
          İLETİŞİM
        </Title>
        <div
          style={{
            width: 40,
            height: 3,
            backgroundColor: "#000",
            margin: "8px auto 0",
          }}
        />
      </div>

      {/* Form + Harita */}
      <Row gutter={[32, 32]} justify="center">
        {/* Sol - Form Alanı */}
        <Col xs={24} md={12}>
          <Form
            layout="vertical"
            style={{ maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}
            onFinish={(values) => console.log("Form verisi:", values)}
          >
            {[
              { name: "name", label: "Adı Soyadı" },
              {
                name: "email",
                label: "E Posta",
                rules: [{ type: "email" as const }],
              },
              { name: "phone", label: "Telefon" },
              { name: "subject", label: "Konu" },
            ].map((field) => (
              <Form.Item
                key={field.name}
                name={field.name}
                label={<span style={{ color: "#666" }}>{field.label}</span>} // <-- griye yakın renk
                rules={[{ required: true }, ...(field.rules || [])]}
              >
                <Input className="animated-input" />
              </Form.Item>
            ))}

            <Form.Item
              name="message"
              label={<span style={{ color: "#666" }}>{"Mesaj"}</span>} // <-- griye yakın renk
              rules={[{ required: true }]}
            >
              <Input.TextArea className="animated-input" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                style={{
                  backgroundColor: "#b40024",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "6px 22px",
                  fontSize: 14,
                  borderRadius: 4,
                }}
              >
                Gönder
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {/* Sağ - Harita Alanı */}
        <Col xs={24} md={10}>
          <div
            style={{
              width: "100%",
              height: 360,
              padding: "8px",
              border: "1px solid #000",
              boxSizing: "border-box",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1570647322146!2d29.2393347!3d40.9785139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac56b497282ff%3A0x3a62805329a26420!2sKas%20Spor!5e0!3m2!1str!2str!4v1716286209472!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Col>
      </Row>

      {/* Stil: linear kırmızı çizgi ve hata border'larını kaldırma */}
      <style jsx global>{`
        .animated-input {
          width: 100%;
          padding: 6px 4px;
          border: none;
          border-bottom: 2px solid #ccc;
          border-radius: 0;
          font-size: 14px;
          font-family: var(--font-montserrat);
          transition: border-image 0.3s ease-in-out;
          background-color: transparent;
          box-shadow: none !important;
        }

        .animated-input:focus {
          outline: none;
          border-bottom: 2px solid transparent;
          border-image: linear-gradient(to right, #b40024, #b40024) 1;
          border-width: 0 0 2px 0;
        }

        textarea.animated-input {
          resize: none;
        }

        /* Ant Design hata kenarlığını tamamen iptal et */
        .ant-form-item-has-error .ant-input,
        .ant-form-item-has-error .ant-input:focus,
        .ant-form-item-has-error .ant-input:hover,
        .ant-form-item-has-error .ant-input-status-error,
        .ant-form-item-has-error .ant-input-textarea,
        .ant-form-item-has-error .ant-input-textarea:focus {
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
        }
      `}</style>
    </section>
  );
}
