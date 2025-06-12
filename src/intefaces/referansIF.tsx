// 

export interface Referans {
  id: number;
  documentId: string;
  referansTitle: string;
  location: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: ReferansImage;
}


export interface ReferansResponse {
  data: Referans[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };}
  export interface ReferansImage {
  id: number;
  name: string;
  url: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: ReferansImageFormat;
    [key: string]: ReferansImageFormat | undefined;
  };
}
export interface ReferansImageFormat {
  name: string;
  url: string;
  width: number;
  height: number;
  size: number;
  mime: string;
}
