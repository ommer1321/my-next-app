"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 50,
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "600px",
        background: "#fff",
        color: "#333",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <p style={{ margin: 0 }}>
        Sitemizi kullanarak çerezleri kabul etmiş olursunuz. Daha fazla bilgi için{" "}
        <Link href="/cerez-politikasi" style={{ color: "#b40024" }}>
          gizlilik politikamıza
        </Link>{" "}
        bakabilirsiniz.
      </p>
      <button
        onClick={acceptCookies}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          background: "#b40024",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Kabul Ediyorum
      </button>
    </div>
  );
};

export default CookieConsent;
