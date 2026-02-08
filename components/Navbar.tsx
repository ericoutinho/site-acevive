
import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-institutional-medium" />
              <span className="text-institutional-dark font-display font-bold text-xl tracking-tight uppercase">
                ACEVIVE <span className="text-institutional-medium">ES</span>
              </span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#sobre" className="text-gray-600 hover:text-institutional-medium px-3 py-2 text-sm font-medium transition-colors">Sobre Nós</a>
              <a href="#servicos" className="text-gray-600 hover:text-institutional-medium px-3 py-2 text-sm font-medium transition-colors">Serviços</a>
              <a href="#buscar" className="text-gray-600 hover:text-institutional-medium px-3 py-2 text-sm font-medium transition-colors">Buscar</a>
              <a href="#beneficios" className="text-gray-600 hover:text-institutional-medium px-3 py-2 text-sm font-medium transition-colors">Benefícios</a>
              <a href="#faq" className="text-gray-600 hover:text-institutional-medium px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#contato"
              className="bg-cta-orange text-white px-6 py-2.5 rounded-md text-sm font-semibold shadow-md hover:bg-cta-orangeHover transition-all transform hover:-translate-y-0.5"
            >
              Faça Parte
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-institutional-medium">Sobre Nós</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-institutional-medium">Serviços</a>
            <a href="#buscar" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-institutional-medium">Buscar</a>
            <a href="#beneficios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-institutional-medium">Benefícios</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-institutional-medium">FAQ</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-cta-orange font-bold uppercase">Faça Parte</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
