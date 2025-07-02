"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUrunler } from "@/services/api";

const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL;

type CartItem = {
  id: string;
  name: string;
  imageUrl: string;
};

type CartContextType = {
  cartItems: CartItem[];
  refreshCart: () => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const refreshCart = async () => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; urun_list=`);
    let slugs: string[] = [];
    if (parts.length === 2) {
      slugs = parts.pop()!.split(";").shift()!.split(",").filter((x) => x);
    }

    if (slugs.length === 0) {
      setCartItems([]);
      return;
    }

    const data = await fetchUrunler();
    const matchedItems = data.data
      .filter((urun) => slugs.includes(urun.slug))
      .map((urun) => ({
        id: urun.slug,
        name: urun.urunName,
        imageUrl:
          urun.urunImage?.[0]?.formats?.thumbnail?.url
            ? `${API_BASE_URL}${urun.urunImage[0].formats.thumbnail.url}`
            : urun.urunImage?.[0]?.url
            ? `${API_BASE_URL}${urun.urunImage[0].url}`
            : ""
      }));

    setCartItems(matchedItems);
  };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
};
