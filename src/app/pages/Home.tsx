import { Link } from "react-router";
import { Calendar, Users, Target, MapPin, Trophy } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707798178440-84403072d249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGN1cCUyMHNvY2NlciUyMHN0YWRpdW18ZW58MXx8fHwxNzc0OTIwNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Estádio Copa do Mundo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6 inline-block">
            <Trophy className="w-20 h-20 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Copa do Mundo 2026
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            EUA 🇺🇸 • Canadá 🇨🇦 • México 🇲🇽
          </p>
          <p className="text-lg text-white/80 mb-8">
            11 de junho - 12 de julho de 2026
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/calendario"
              className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105"
            >
              Ver Calendário Completo
            </Link>
            <Link
              to="/grupos"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Ver Grupos
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/calendario"
            className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all group"
          >
            <Calendar className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Calendário</h3>
            <p className="text-gray-600">
              Confira todos os 104 jogos da Copa do Mundo com horários e estádios
            </p>
          </Link>

          <Link
            to="/grupos"
            className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all group"
          >
            <Users className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Grupos</h3>
            <p className="text-gray-600">
              Acompanhe a classificação e resultados dos 12 grupos da fase inicial
            </p>
          </Link>

          <Link
            to="/eliminatorias"
            className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all group"
          >
            <Target className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Eliminatórias</h3>
            <p className="text-gray-600">
              Chave completa das oitavas até a grande final
            </p>
          </Link>
        </div>
      </section>

      {/* Tournament Info */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-gray-200 shadow-sm">
            <Trophy className="w-10 h-10 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre a Copa 2026</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Copa do Mundo FIFA 2026 será a 23ª edição do torneio e será
              realizada pela primeira vez em três países: Estados Unidos, Canadá e
              México. Esta será a primeira Copa com 48 seleções participantes.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">48</div>
                <div className="text-sm text-gray-600">Seleções</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">16</div>
                <div className="text-sm text-gray-600">Estádios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">104</div>
                <div className="text-sm text-gray-600">Jogos</div>
              </div>
            </div>
          </div>

          {/* Hosts */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-gray-200 shadow-sm">
            <MapPin className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Países Anfitriões</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl">🇺🇸</div>
                <div>
                  <div className="font-bold text-gray-900">Estados Unidos</div>
                  <div className="text-sm text-gray-600">11 cidades-sede</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl">🇨🇦</div>
                <div>
                  <div className="font-bold text-gray-900">Canadá</div>
                  <div className="text-sm text-gray-600">2 cidades-sede</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl">🇲🇽</div>
                <div>
                  <div className="font-bold text-gray-900">México</div>
                  <div className="text-sm text-gray-600">3 cidades-sede</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden h-64 md:h-auto">
            <ImageWithFallback
              src="/TaçaCopa.jpg"
              alt="Troféu e Bola da Copa do Mundo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden h-64 md:h-auto">
            <ImageWithFallback
              src="/fifaicon.png"
              alt="Icon da copa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
