
import React from 'react';
import { Gavel, FileCheck, Info, Users, Calendar, MessageSquare } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
    <div className="w-12 h-12 bg-institutional-medium/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-institutional-medium transition-colors">
      <div className="text-institutional-medium group-hover:text-white transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Representação Institucional",
      description: "Representamos os interesses da categoria junto a órgãos públicos e entidades reguladoras, garantindo voz ativa para o setor.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Orientação Técnica",
      description: "Suporte normativo completo para manter sua empresa alinhada às exigências técnicas e mudanças na legislação.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Apoio Jurídico",
      description: "Informativos e orientações preventivas sobre questões administrativas e jurídicas do segmento de vistoria.",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      title: "Divulgação Institucional",
      description: "Fortalecemos o nome da associação para que as empresas credenciadas sejam reconhecidas pelo mercado.",
      icon: <Info className="w-6 h-6" />
    },
    {
      title: "Eventos e Capacitação",
      description: "Reuniões estratégicas, eventos e treinamentos constantes para atualização de proprietários e técnicos.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Canal Direto",
      description: "Comunicação fluida entre os associados e a diretoria, garantindo que suas sugestões e dores sejam ouvidas.",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-institutional-medium font-bold text-sm uppercase tracking-widest mb-4">Nossos Serviços</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900">Suporte completo para sua empresa</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
