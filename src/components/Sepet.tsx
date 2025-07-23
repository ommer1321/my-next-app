"use client";
import React, { useState } from "react";
import { Drawer, Button, List, Avatar, Form, Input, Card } from "antd";
import { CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { createFormEntry } from "@/services/api";
import { useRouter } from 'next/navigation';
import { getCookie } from "@/utils/cookieUtils";
import { TeklifPdfListesiPDFExport } from "./Teklif";  

type CartItem = {
  id: string;
  name: string;
  imageUrl: string;
};

type SideCartProps = {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onCheckout: (formValues: any) => void;
  onRemove: (id: string) => void;
};

const SideCart: React.FC<SideCartProps> = ({
  open,
  onClose,
  cartItems,
  onCheckout,
  onRemove
}) => {

  const [formVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();

  const handleOk = async (values: any) => {
    const cartIds = getCookie('urun_list');
    const idList = cartIds ? cartIds.split(',') : [];

    const matchedNames = cartItems
      ?.filter(item => idList.includes(item.id))
      .map(item => item.name);

    const productNamesStr = matchedNames.length > 0 
      ? matchedNames.join(', ')
      : 'Ürün bulunamadı';

    const descWithProducts = `Sepet Ürünleri: ${productNamesStr}\n\nKullanıcı notu: ${values.desc || ''}`;
    values.desc = descWithProducts;

    console.log("Form Values:", values);
    setLoading(true);

    try {
      const response = await createFormEntry(values);
      const successCodes = [200, 201, 202];

      if (successCodes.includes(response?.status || 200)) {
        toast.success('Form başarıyla gönderildi');
        onClose();
        router.push('/tesekkurler');
      } else {
        toast.error('Form gönderildi ancak bir sorun oluştu.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Form gönderilirken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer
      title="Sepetim"
      placement="right"
      onClose={onClose}
      open={open}
      width={380}
      styles={{
    body: { position: "relative", overflowY: "auto", maxHeight: "100vh", paddingBottom: "24px" }
      }}
    >
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              padding: "0 24px",
              transition: "all 0.4s ease",
              transform: formVisible ? "translateX(-100%)" : "translateX(0)",
              opacity: formVisible ? 0 : 1,
              pointerEvents: formVisible ? "none" : "auto"
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={cartItems}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      type="text"
                      icon={<CloseOutlined />}
                      onClick={() => onRemove(item.id)}
                      style={{ color: "#b40024" }}
                    />
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.imageUrl} />}
                    title={item.name}
                  />
                </List.Item>
              )}
            />
            <Button
              type="primary"
              onClick={() => setFormVisible(true)}
              style={{
                marginTop: 24,
                background: "#b40024",
                border: "none",
                width: "100%"
              }}
            >
              Sepet Teklif Talebi Bilgilerini Gir
            </Button>


<Button
  type="default"
  style={{ marginTop: 12, width: '100%' }}
  onClick={() => TeklifPdfListesiPDFExport(cartItems)}
>
  PDF Teklif İndir
</Button>

  
  <div
    style={{
      marginTop: 16,
      padding: '12px 16px',
      backgroundColor: '#fef2f2',
      border: '1px solid #b40024',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
    }}
  >
    <span style={{ fontSize: '18px', lineHeight: '1', color: '#b40024' }}>🛎️</span>
    <p style={{ margin: 0, fontSize: '13px', color: '#7f1d1d' }}>
      Teklif almak istediğiniz ürünleri sepete ekleyerek, ister PDF ile WhatsApp’tan paylaşabilir,
      isterseniz sepeti bize göndererek teklif alabilirsiniz.
    </p>
  </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              padding: "0 24px",
              transition: "all 0.4s ease",
              transform: formVisible ? "translateX(0)" : "translateX(100%)",
              opacity: formVisible ? 1 : 0,
              pointerEvents: formVisible ? "auto" : "none"
            }}
          >
            <Card
              style={{
                marginTop: 8,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: 8
              }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={handleOk}
              >
                <Form.Item
                  label="Ad"
                  name="name"
                  rules={[{ required: true, message: "Lütfen ad giriniz." }]}
                >
                  <Input placeholder="İsim" />
                </Form.Item>

                <Form.Item
                  label="Soyad"
                  name="surname"
                  rules={[{ required: true, message: "Lütfen soyad giriniz." }]}
                >
                  <Input placeholder="Soyad" />
                </Form.Item>

                <Form.Item
                  label="Telefon"
                  name="tel"
                  rules={[{ required: true, message: "Lütfen telefon giriniz." }]}
                >
                  <Input placeholder="Telefon" />
                </Form.Item>

                <Form.Item
                  label="E-posta"
                  name="email"
                  rules={[
                    { required: true, message: "Lütfen e-posta giriniz." },
                    { type: "email", message: "Geçerli bir e-posta giriniz." }
                  ]}
                >
                  <Input placeholder="E-posta" />
                </Form.Item>

                <Form.Item
                  label="Açıklama"
                  name="desc"
                >
                  <Input.TextArea placeholder="Teklif notu..." />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{
                    marginTop: 8,
                    background: "#b40024",
                    border: "none",
                    width: "100%"
                  }}
                >
                  Teklifi Tamamla
                </Button>
              </Form>
            </Card>

            <Button
              shape="circle"
              icon={<ArrowLeftOutlined />}
              onClick={() => setFormVisible(false)}
              style={{
                position: "fixed",
                top: 20,
                right: 35,
                width: 30,
                height: 30,
                background: "#b40024",
                border: "none",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                zIndex: 1050
              }}
            />
          </div>
        </>
      )}
    </Drawer>
  );
};

export default SideCart;
