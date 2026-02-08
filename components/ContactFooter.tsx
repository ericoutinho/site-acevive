
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white [backface-visibility:hidden]">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-institutional-dark rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="relative z-10 lg:flex items-center justify-between">
            <div className="lg:max-w-xl mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para elevar o nível da sua empresa?</h2>
              <p className="text-institutional-vibrant text-lg mb-8 opacity-90">
                Entre em contato e faça parte da maior rede de apoio às empresas de vistoria veicular do Espírito Santo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-institutional-medium transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+55 (27) 99690-8066</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-institutional-medium transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">contato@acevive.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-institutional-medium transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Vitória, Espírito Santo - Brasil</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <form className="bg-white p-6 rounded-2xl shadow-lg" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome Fantasia"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-institutional-medium"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-mail profissional"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-institutional-medium"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-institutional-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-cta-orange text-white py-4 rounded-lg font-bold shadow-md hover:bg-cta-orangeHover transition-all flex items-center justify-center gap-2"
                  >
                    Enviar Solicitação
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Abstract background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-institutional-medium/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>

        {/* Real Footer Info */}
        <div className="grid md:grid-cols-4 gap-12 border-t border-gray-800 pt-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-10 h-10 text-institutional-vibrant" />
              <span className="text-white font-display font-bold text-2xl tracking-tight uppercase">
                ACEVIVE <span className="text-institutional-vibrant">ES</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Unindo forças para garantir segurança jurídica e excelência técnica para o mercado de vistorias veiculares no Espírito Santo.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/acevive.vix" target="_blanc" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-institutional-medium transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/acevive.vix" target="_blanc" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-institutional-medium transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5527996908066" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-institutional-medium transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Institucional</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#sobre" className="hover:text-institutional-vibrant transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-institutional-vibrant transition-colors">Serviços</a></li>
              <li><a href="#beneficios" className="hover:text-institutional-vibrant transition-colors">Benefícios</a></li>
              <li><a href="#faq" className="hover:text-institutional-vibrant transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Informações</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Razão Social: Associação Capixaba das Empresas de Vistoria Veicular</p>
              <p>CNPJ: 34.249.913/0001-68</p>
              <p>Vitória - ES</p>
              <p>Brasil</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} ACEVIVE ES. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default ContactFooter;
