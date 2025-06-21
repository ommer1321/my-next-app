import { Modal, Input, Row, Col, Button, message } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

export default function TeklifFormuModal({
  isOpen,
  onClose,
  onSubmit,
  loading,
  formState,
  setFormState,
  showErrors,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  loading: boolean;
  formState: {
    name: string;
    surname: string;
    email: string;
    tel: string;
    desc: string;
  };
  setFormState: (state: any) => void;
  showErrors: boolean;
}) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered={false}
      style={{ top: 40 }}
      closeIcon={
        <div
          style={{
            backgroundColor: '#b40011',
            borderRadius: '60px',
            padding: '3px 14px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
          }}
        >
          <span
            style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, lineHeight: 1 }}
          >
            X
          </span>
        </div>
      }
    >
      <div style={{ background: '#b40024', padding: '16px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', margin: 0, fontWeight: 600 }}>TEKLİF FORMU</h2>
      </div>

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
              <div style={{ color: 'red', fontSize: 12, marginBottom: 20 }}>
                Adı alanı zorunludur.
              </div>
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
              <div style={{ color: 'red', fontSize: 12, marginBottom: 20 }}>
                Soyadı alanı zorunludur.
              </div>
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
              <div style={{ color: 'red', fontSize: 12, marginBottom: 20 }}>
                E-posta alanı zorunludur.
              </div>
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
              <div style={{ color: 'red', fontSize: 12, marginBottom: 20 }}>
                Telefon alanı zorunludur.
              </div>
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
          loading={loading}
          onClick={onSubmit}
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
  );
}
