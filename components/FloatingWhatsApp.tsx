
import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

interface Collaborator {
  name: string;
  sector: string;
  expediente: string;
  whatsapp: string;
  image: string;
}

const collaboratorsData: Collaborator[] = [
  {
    name: "Anderson Stofel",
    sector: "Diretoria",
    expediente: "Seg a Sex: 08:00 - 18:00",
    whatsapp: "5527999186595",
    image: "/contact-anderson-stofel.jpg"
  },
  {
    name: "Matheus Olmo",
    sector: "Financeiro",
    expediente: "Seg a Sex: 08:00 - 18:00",
    whatsapp: "5527996905033",
    image: "/contact-matheus-olmo.jpg"
  },
  {
    name: "Suzana Mattos",
    sector: "Atendimento ao associado",
    expediente: "Seg a Sex: 09:00 - 17:00",
    whatsapp: "5522996908066",
    image: "/contact-suzana-mattos.jpg"
  }
];

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Popup Container */}
      {isOpen && (
        <div className="absolute bottom-[85px] right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-institutional-dark p-4">
            <h3 className="text-white font-bold text-lg">Atendimento ACEVIVE</h3>
            <p className="text-institutional-vibrant text-xs">Como podemos ajudar hoje?</p>
          </div>

          <div className="p-2 space-y-1 max-h-[400px] overflow-y-auto">
            {collaboratorsData.map((collab, index) => (
              <a
                key={index}
                href={`https://wa.me/${collab.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="relative">
                  <img
                    src={collab.image}
                    alt={collab.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-100 object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>

                <div className="flex-grow">
                  <h4 className="text-gray-900 font-bold text-sm leading-tight group-hover:text-institutional-medium transition-colors">
                    {collab.name}
                  </h4>
                  <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wider">
                    {collab.sector}
                  </p>
                  <p className="text-gray-400 text-[10px]">
                    {collab.expediente}
                  </p>
                </div>

                <div className="text-institutional-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          <div className="p-3 bg-gray-50 text-center text-[10px] text-gray-400 border-t border-gray-100 uppercase tracking-widest font-bold">
            Unidos somos mais fortes
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={togglePopup}
        className={`w-[70px] h-[70px] rounded-full flex items-center justify-center shadow-xl transition-all transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-gray-200 text-gray-700' : 'bg-institutional-medium text-white'
          }`}
        aria-label="Abrir suporte"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-9 h-9" />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
