import { RefSeoResponse, UrunlerResponse } from "@/intefaces/urunlerIF";
import { ReferansResponse } from "@/intefaces/referansIF";
import { UrunKategoriResponse } from "@/intefaces/urunKategoriIF";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


if (!API_BASE_URL) {
  throw new Error('API_BASE_URL ortam değişkeni tanımlanmalı!');
}

export async function fetchUrunler(): Promise<UrunlerResponse> {
  try {
    // console.log('API_BASE_URL:', API_BASE_URL);

    const response = await fetch(`${API_BASE_URL}/urunlers?populate=*&pagination[page]=0&pagination[pageSize]=1000`, {
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
    `${API_BASE_URL}/urun-kategoris?populate=*&pagination[page]=0&pagination[pageSize]=1000`,
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
    `${API_BASE_URL}/urun-kategoris?filters[slug][$eq]=${slug}&populate[0]=urunKategoriImage&populate[1]=urunlers&populate[2]=urunlers.urunImage&populate[3]=urunKategoriSlideImage&populate[4]=SEO&pagination[page]=0&pagination[pageSize]=1000`,
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
  const response = await fetch(`${API_BASE_URL}/hakkimizdas?populate=*&pagination[page]=0&pagination[pageSize]=1000`, {
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

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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



export async function fetchRefSeo(): Promise<RefSeoResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ref-seo?populate=*`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`RefSeo API hatası: ${response.status}`);
    }

    const data = await response.json();
    return data as RefSeoResponse;
  } catch (error) {
    console.error('RefSeo datası çekerken hata oluştu:', error);
    throw error;
  }
}


export async function fetchHomeSeo(): Promise<RefSeoResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anasayfa?populate=*`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HomeSeo API hatası: ${response.status}`);
    }

    const data = await response.json();
    return data as RefSeoResponse;
  } catch (error) {
    console.error('HomeSeo datası çekerken hata oluştu:', error);
    throw error;
  }
}


export async function fetchUrunlerSeo(): Promise<RefSeoResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/urunler-seo?populate=*`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`UrunlerSeo API hatası: ${response.status}`);
    }

    const data = await response.json();
    return data as RefSeoResponse;
  } catch (error) {
    console.error('UrunlerSeo datası çekerken hata oluştu:', error);
    throw error;
  }
}

export async function fetchIletisimSeo(): Promise<RefSeoResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/iletisim-seo?populate=*`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`IletisimSeo API hatası: ${response.status}`);
    }

    const data = await response.json();
    return data as RefSeoResponse;
  } catch (error) {
    console.error('IletisimSeo datası çekerken hata oluştu:', error);
    throw error;
  }
}


export async function fetchHakkimizdaSeo(): Promise<RefSeoResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/hakkimizda-seo?populate=*`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HakkimizdaSeo API hatası: ${response.status}`);
    }

    const data = await response.json();
    return data as RefSeoResponse;
  } catch (error) {
    console.error('HakkimizdaSeo datası çekerken hata oluştu:', error);
    throw error;
  }
}
