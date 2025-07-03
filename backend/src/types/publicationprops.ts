export interface PublicationProps {
  title: string;
  content: string;
  image?: string;
  type: "noticia" | "evento" | "campanha" | "banner" | "galeria";
  createdAt?: Date;
  updatedAt?: Date;
  published?: boolean;
}