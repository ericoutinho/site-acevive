
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, MessageCircle, Instagram, Facebook, Globe, ExternalLink } from 'lucide-react';
import { Company } from '../types';

const companiesData: Company[] = [
  {
    id: "1",
    name: "Vistoria Segura Vitória",
    cnpj: "12.345.678/0001-90",
    address: "Av. Dante Michelini, 1000, Jardim da Penha, Vitória - ES",
    phone: "(27) 3333-4444",
    city: "Vitória",
    state: "ES",
    whatsapp: "5527999991111",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    website: "https://example.com"
  },
  {
    id: "2",
    name: "CheckAuto Vila Velha",
    cnpj: "98.765.432/0001-10",
    address: "Rua Henrique Moscoso, 500, Centro, Vila Velha - ES",
    phone: "(27) 3222-1111",
    city: "Vila Velha",
    state: "ES",
    whatsapp: "5527999992222",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    website: "https://example.com"
  },
  {
    id: "3",
    name: "Serra Vistorias Premium",
    cnpj: "45.678.912/0001-33",
    address: "Av. Central, 200, Laranjeiras, Serra - ES",
    phone: "(27) 3444-5555",
    city: "Serra",
    state: "ES",
    whatsapp: "5527999993333",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    website: "https://example.com"
  },
  {
    id: "4",
    name: "Cariacica Inspeções",
    cnpj: "11.222.333/0001-44",
    address: "Rodovia BR-262, Km 3, Jardim América, Cariacica - ES",
    phone: "(27) 3111-2222",
    city: "Cariacica",
    state: "ES",
    whatsapp: "5527999994444",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    website: "https://example.com"
  },
  {
    id: "5",
    name: "Linhares Vistorias",
    cnpj: "55.666.777/0001-88",
    address: "Av. Governador Lindenberg, 150, Centro, Linhares - ES",
    phone: "(27) 3371-0000",
    city: "Linhares",
    state: "ES",
    whatsapp: "5527999995555",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    website: "https://example.com"
  }
];

const CompanySearch: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>("ES");
  const [selectedCity, setSelectedCity] = useState<string>("Vitória");

  const states = useMemo(() => Array.from(new Set(companiesData.map(c => c.state))), []);
  const cities = useMemo(() => {
    return Array.from(new Set(companiesData.filter(c => c.state === selectedState).map(c => c.city)));
  }, [selectedState]);

  const filteredCompanies = useMemo(() => {
    return companiesData.filter(c => 
      (selectedState === "" || c.state === selectedState) &&
      (selectedCity === "" || c.city === selectedCity)
    );
  }, [selectedState, selectedCity]);

  return (
    <section id="buscar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-institutional-medium font-bold text-sm uppercase tracking-widest mb-4">Procurando qualidade?</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            BUSCAR EMPRESAS DE VISTORIA
          </p>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify md:text-center">
            <p>
              Encontre as empresas de vistoria mais próximas da sua localidade que possuam o certificado de qualidade da ACEVIVE e faça sua vistoria com certeza de garantia e qualidade.
            </p>
          </div>
        </div>

        {/* Search Controls */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-end mb-12">
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Estado</label>
            <select 
              value={selectedState}
              onChange={(e) => { setSelectedState(e.target.value); setSelectedCity(""); }}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-institutional-medium outline-none text-gray-700 font-medium"
            >
              <option value="">Todos os Estados</option>
              {states.map(state => <option key={state} value={state}>{state}</option>)}
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Cidade</label>
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-institutional-medium outline-none text-gray-700 font-medium disabled:bg-gray-100"
              disabled={!selectedState}
            >
              <option value="">Todas as Cidades</option>
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
          </div>
          <div className="w-full md:w-1/4">
            <button className="w-full bg-institutional-dark text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors">
              <Search className="w-5 h-5" />
              Filtrar
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map(company => (
              <div key={company.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                    <p className="text-xs text-institutional-medium font-bold uppercase mt-1">Empresa Credenciada</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-institutional-medium transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-1.5 rounded-md mt-0.5">
                      <MapPin className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{company.address}</p>
                      <p className="text-xs text-gray-400 mt-1">CNPJ: {company.cnpj}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-1.5 rounded-md">
                      <Phone className="w-4 h-4 text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{company.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a 
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-institutional-medium text-white px-4 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-institutional-dark transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Localização
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="bg-gray-50 inline-flex p-6 rounded-full mb-4">
                <Search className="w-12 h-12 text-gray-300" />
              </div>
              <p className="text-gray-500 font-medium text-lg">Nenhuma empresa encontrada para esta localidade.</p>
              <button 
                onClick={() => { setSelectedState("ES"); setSelectedCity(""); }}
                className="text-institutional-medium font-bold mt-2 hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanySearch;
