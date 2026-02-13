// types/index.ts
export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  results: {
    metric: string;
    value: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

// types/index.ts
export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  results: {
    metric: string;
    value: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export interface ResultMetric {
  before: string;
  after: string;
  metric: string;
  change: string;
}

export interface Client {
  name: string;
  logo: string;
}
