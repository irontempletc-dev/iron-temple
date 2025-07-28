export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageHint: string;
  price: number;
  purchased: boolean;
  content: {
    videos: { title: string; url: string }[];
    documents: { title:string; url: string }[];
  };
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
}
