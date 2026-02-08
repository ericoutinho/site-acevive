
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BenefitItemProps {
  text: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface TestimonialProps {
  text: string;
  author: string;
}

export interface Company {
  id: string;
  name: string;
  cnpj: string;
  address: string;
  phone: string;
  city: string;
  state: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  website: string;
}
