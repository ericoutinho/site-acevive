
import React from 'react';
import { CheckCircle2, Sprout } from 'lucide-react';

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="w-6 h-6 text-institutional-vibrant flex-shrink-0 mt-0.5" />
    <span className="text-gray-700 font-medium text-lg leading-snug">{text}</span>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    "Fortalecimento da imagem institucional",
    "Representatividade coletiva perante mercado e poder público",
    "Atualizações constantes sobre normas e exigências legais",
    "Networking com empresários do setor",
    "Padronização de processos e boas práticas",
    "Participação ativa nas decisões da associação"
  ];

  return (
    <section id="beneficios" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-institutional-medium font-bold text-sm uppercase tracking-widest mb-4">Vantagens Exclusivas</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">Benefícios de ser um associado</h2>
            <div className="grid sm:grid-cols-1 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} />
              ))}
            </div>
            <div className="p-6 bg-institutional-dark rounded-xl shadow-lg">
              <p className="text-white text-xl font-bold leading-tight">
                Mais segurança, mais voz e mais crescimento para sua empresa de vistoria veicular.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/site-section-beneficios.jpg"
                alt="Networking empresarial"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-institutional-medium text-white px-8 py-4 rounded-xl shadow-xl font-bold flex items-start gap-3">
                <Sprout className="-ml-3" />
                Crescemos Juntos!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
