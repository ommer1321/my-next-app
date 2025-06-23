
export interface Urun {
  id: number;
  documentId: string;
  urunName: string;
  urunDesc: string;
  createdAt: string;
  slug:string;
  updatedAt: string;
  urunImage :any;
  publishedAt: string;
  urun_kategori?: any;
  SEO:any;
}


export interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface UrunlerResponse {
  data: Urun[];
  meta: PaginationMeta;
}


export type RefSeoResponse = {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    SEO: {
      id: number;
      metaTitle: string;
      metaDescription: string;
      keywords: string;
      canonicalURL: string;
      metaRobots: string;
    };
  };
  meta: any;
};