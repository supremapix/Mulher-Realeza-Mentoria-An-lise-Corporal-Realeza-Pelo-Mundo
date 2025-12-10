import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  highlight?: boolean;
  ctaText: string;
  whatsappMessage: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
  image: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FunnelStep {
  title: string;
  price?: string;
  description: string;
  icon: LucideIcon;
}