
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ text: string; author: string }> = ({ text, author }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
    <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100" />
    <div className="flex text-cta-orange mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
    </div>
    <p className="text-gray-600 italic mb-6 leading-relaxed">"{text}"</p>
    <div>
      <p className="font-bold text-gray-900">{author}</p>
      <p className="text-xs text-gray-400 font-bold uppercase">Empresário Associado</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-institutional-medium font-bold text-sm uppercase tracking-widest mb-4">Depoimentos</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900">O que dizem nossos associados</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            text="A associação trouxe mais união e representatividade para o nosso setor. Hoje temos voz ativa e acesso a informações confiáveis."
            author="Roliber Santana"
          />
          <TestimonialCard
            text="O suporte técnico e normativo é essencial para o dia a dia. Sentimos muito mais segurança nas vistorias e no contato com o Detran."
            author="Andressa Machado"
          />
          <TestimonialCard
            text="Fazer parte deste grupo permitiu trocar experiências valiosas com outros empresários, elevando o nível profissional de todos."
            author="Juliano A. Santos"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
