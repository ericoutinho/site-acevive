
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-institutional-medium transition-colors">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-institutional-medium" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-institutional-medium transition-colors" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Quem pode se associar?",
      answer: "Qualquer empresa de vistoria veicular devidamente credenciada e regular junto ao Detran-ES pode solicitar sua associação. Passamos por um breve processo de verificação documental para garantir a integridade do grupo."
    },
    {
      question: "A associação substitui obrigações legais?",
      answer: "Não. A associação é uma entidade privada de representação e suporte. As obrigações legais, taxas e normativas junto ao Detran-ES e outros órgãos continuam sendo de responsabilidade individual de cada empresa."
    },
    {
      question: "Há custos para se associar?",
      answer: "Sim, existe uma contribuição associativa mensal simbólica que é utilizada para custear a representação jurídica, eventos, treinamentos e infraestrutura de suporte aos associados."
    },
    {
      question: "Como faço para me associar?",
      answer: "Você pode clicar no botão 'Faça parte da associação' e preencher o formulário de contato, ou entrar em contato direto via WhatsApp. Nossa equipe entrará em contato para enviar a ficha de adesão e lista de documentos."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-institutional-medium font-bold text-sm uppercase tracking-widest mb-4">Perguntas Frequentes</h2>
          <p className="text-3xl font-bold text-gray-900">Dúvidas comuns</p>
        </div>
        <div className="bg-white rounded-2xl p-4 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
