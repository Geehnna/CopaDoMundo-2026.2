import { groups } from "../data/matches";
import { Users, Trophy } from "lucide-react";

export function Groups() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fase de Grupos
          </h1>
          <p className="text-gray-600 text-lg">
            Classificação e resultados dos 12 grupos
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div
              key={group.name}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{group.name}</h2>
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>

              {/* Table Header */}
              <div className="mb-3 w-full">
    <div className="grid grid-cols-[24px_1fr_40px_40px_40px_40px] gap-2 text-[10px] sm:text-xs text-gray-500 font-bold px-2 items-center uppercase tracking-wider">
    <div className="flex justify-center">#</div>
    <div className="text-left">TIME</div>
    <div className="text-center">PTS</div>
    <div className="text-center">J</div>
    <div className="text-center">V</div>
    <div className="text-center">D</div>
  </div>
</div>

              {/* Teams */}
              <div className="space-y-2">
                {group.teams.map((team, index) => (
                  <div
                    key={team.name}
                    className={`grid grid-cols-[24px_1fr_40px_40px_40px_40px] gap-2 items-center p-2 rounded-lg transition-all ${
                      index < 2
                        ? "bg-green-100 border border-green-300"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="text-gray-600 text-xs font-bold text-center">
                      {index + 1}
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xl flex-shrink-0">{team.flag}</span>
                      <span className="text-gray-900 font-bold text-xs truncate">
                        {team.name}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-bold text-gray-900 text-sm">{team.points}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-600 text-xs">{team.played}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-green-600 text-xs">{team.wins}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-red-600 text-xs">{team.losses}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                  <span>Classificados</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-12 bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Como funciona?</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Os dois primeiros colocados de cada grupo se classificam para as oitavas de final</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Os 8 melhores terceiros colocados também avançam para as oitavas de final</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Em caso de empate em pontos, os critérios de desempate são: saldo de gols, gols marcados e confronto direto</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Cada vitória vale 3 pontos, empate 1 ponto e derrota 0 pontos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}