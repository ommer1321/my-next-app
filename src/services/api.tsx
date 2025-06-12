import { UrunlerResponse } from "@/intefaces/urunlerIF";
import { ReferansResponse } from "@/intefaces/referansIF";
import { UrunKategoriResponse } from "@/intefaces/urunKategoriIF";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_BEARER_URL = process.env.NEXT_PUBLIC_Bearer;


if (!API_BASE_URL) {
  throw new Error('API_BASE_URL ortam değişkeni tanımlanmalı!');
}

export async function fetchUrunler(): Promise<UrunlerResponse> {
  try {
    console.log('API_BASE_URL:', API_BASE_URL);

    const response = await fetch(`${API_BASE_URL}/urunlers?populate=*`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API hatası: ${response.status}`);
    }

    const data = await response.json();
    return data as UrunlerResponse;
  } catch (error) {
    console.error('Ürünleri çekerken hata oluştu:', error);
    throw error;
  }




}

export async function fetchUrunKategoriler(): Promise<UrunKategoriResponse> {
  const response = await fetch(
    `${API_BASE_URL}/urun-kategoris?populate=*`,
    {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error(`API hatası: ${response.status}`);
  }

  return response.json();
}

export async function fetchUrunKategoriById(slug:any): Promise<UrunKategoriResponse> {
  const response = await fetch(
    `${API_BASE_URL}/urun-kategoris?filters[slug][$eq]=${slug}&populate[0]=urunKategoriImage&populate[1]=urunlers&populate[2]=urunlers.urunImage&populate[3]=urunKategoriSlideImage`,
    {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error(`API hatası: ${response.status}`);
  }

  return response.json();
}



export async function fetchUrunById(slug:any): Promise<UrunlerResponse> {
  const response = await fetch(
    `${API_BASE_URL}/urunlers?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error(`API hatası: ${response.status}`);
  }

  return response.json();
}


export async function fetchReferanslar(): Promise<ReferansResponse> {
  const response = await fetch(`${API_BASE_URL}/hakkimizdas?populate=*`, {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`API hatası: ${response.status}`);
  }

  return response.json();
}



type FormPayload = {
  name: string;
  surname: string;
  email: string;
  desc: string;
  tel: string;
};



export async function createFormEntry(formData: FormPayload): Promise<any> {
  const API_URL = API_BASE_URL + '/forms';
  const BEARER_TOKEN =API_BEARER_URL

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEARER_TOKEN}`,
    },
    body: JSON.stringify({
      data: formData,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Form gönderimi başarısız:', errorData);
    throw new Error(`API hatası: ${response.status} - ${errorData.error?.message || 'Bilinmeyen hata'}`);
  }

  return response.json();
}