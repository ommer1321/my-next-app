
export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Media {
  id: number;
  documentId: string;
  name: string;
  url: string;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

export interface Urun {
  id: number;
  documentId: string;
  urunName: string;
  slug:string;
  urunImage: any;
  urunDesc: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface UrunKategori {
  id: number;
  documentId: string;
  urunKategoriName: string;
  urunKategoriDesc: string;
  slug:string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  urunlers: Urun[];
  urunKategoriImage?: Media;
  urunKategoriSlideImage?: Media;
  urunKategori?:any;
  order:any;
  SEO:any;
}

export interface UrunKategoriResponse {
  data: UrunKategori[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: Media;
  canonicalUrl: string;
}

  //  "SEO": {
  //               "id": 9,
  //               "metaTitle": "Abdominal Oblique Crunch | Karın Kası Ekipmanı | Kasspor\n",
  //               "metaDescription": "Abdominal oblique crunch cihazı ile oblik kaslarınızı güvenle çalıştırın. Dayanıklı tasarımı ve gelişmiş ekran özellikleriyle üstün performans.\n",
  //               "keywords": "karın kası aleti, abdominal crunch, oblik crunch, spor ekipmanı, fitness makinesi, karın egzersizi\n",
  //               "canonicalURL": null,
  //               "metaRobots": "index, follow"
  //           }