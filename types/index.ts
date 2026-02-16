export interface Industry {
  title: string;
  desc: string;
  link: string;
  icon: string;
}

export type Project = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
};

export interface Service {
  _id: string;
  title: string;
  slug: string;
  desc: string;
  className: string; // We'll map 'bentoSize' to this
  image: string; // URL string from Sanity
  icon: string;
}
