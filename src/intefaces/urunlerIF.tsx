
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

