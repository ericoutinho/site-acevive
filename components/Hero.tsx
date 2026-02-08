
import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-institutional-dark overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b981_0,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="text-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-institutional-medium/20 border border-institutional-medium/30 text-institutional-vibrant text-xs font-bold uppercase tracking-wider mb-6">
              A maior rede de apoio às ECVs do ES!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unindo e fortalecendo as empresas de vistoria veicular do Espírito Santo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              A associação que representa, orienta e valoriza empresas de vistoria veicular credenciadas ao Detran-ES, promovendo segurança jurídica, troca de conhecimento e crescimento do setor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-cta-orange text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-cta-orangeHover transition-all transform hover:scale-105"
              >
                Faça parte da associação
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Conheça nossos benefícios
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5">
              <img
                src="/site-section-hero.jpg"
                alt="Centro de vistoria moderno e profissional"
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                onError={(e) => {
                  // Fallback if the local asset is not available in the environment
                  e.currentTarget.src = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800";
                }}
              />
              {/* Greenish overlay tint to match brand */}
              <div className="absolute inset-0 bg-institutional-dark/30"></div>
            </div>
            {/* Floating indicator */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100">
              <div className="w-12 h-12 bg-institutional-medium/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-institutional-medium" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase">Credibilidade</p>
                <p className="text-institutional-dark font-bold text-lg">100% junto ao Detran-ES</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="text-white/40 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
