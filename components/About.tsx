
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-institutional-medium font-bold text-sm uppercase tracking-widest mb-4">Sobre Nós</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Representando a excelência técnica em todo o Espírito Santo
          </p>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify md:text-center">
            <p>
              Somos uma associação formada por empresas de vistoria veicular credenciadas, com atuação em todo o estado do Espírito Santo.
            </p>
            <p>
              Nosso propósito é representar, apoiar e fortalecer empresários e profissionais do segmento, promovendo boas práticas, alinhamento técnico, atualização constante e diálogo com os órgãos reguladores.
            </p>
            <p className="font-semibold text-institutional-dark italic">
              "Acreditamos que unidos somos mais fortes, mais preparados e mais respeitados no mercado." <span className="text-grey-600 font-normal">— Anderson Stofel, Diretor Presidente</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
