import { matches } from "../data/matches";
import { Target, Trophy, Clock, MapPin } from "lucide-react";

export function Knockout() {
  const roundOf16 = matches.filter(m => m.stage === "Oitavas");
  const quarterFinals = matches.filter(m => m.stage === "Quartas");
  const semiFinals = matches.filter(m => m.stage === "Semifinal");
  const thirdPlace = matches.filter(m => m.stage === "3º Lugar");
  const final = matches.filter(m => m.stage === "Final");

  const MatchCard = ({ match }: { match: typeof matches[0] }) => (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all">
      {/* Teams */}
      <div className="space-y-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{match.flag1}</span>
          <span className="text-gray-900 font-bold flex-1">{match.team1}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{match.flag2}</span>
          <span className="text-gray-900 font-bold flex-1">{match.team2}</span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1 text-xs text-gray-600 pt-3 border-t border-gray-200">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{new Date(match.date + "T00:00:00").toLocaleDateString("pt-BR")} - {match.time}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          <span>{match.stadium}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Target className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fase Eliminatória
          </h1>
          <p className="text-gray-600 text-lg">
            Mata-mata desde as oitavas até a grande final
          </p>
        </div>

        {/* Knockout Stages */}
        <div className="space-y-12">
          {/* Round of 16 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="text-2xl font-bold text-gray-900">Oitavas de Final</h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roundOf16.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>

          {/* Quarter Finals */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="text-2xl font-bold text-gray-900">Quartas de Final</h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quarterFinals.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>

          {/* Semi Finals */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="text-2xl font-bold text-gray-900">Semifinais</h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {semiFinals.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>

          {/* Finals */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="text-2xl font-bold text-gray-900">Finais</h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Third Place */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🥉</span>
                  <h3 className="font-bold text-gray-900">Disputa de 3º Lugar</h3>
                </div>
                {thirdPlace.map(match => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>

              {/* Final */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  <h3 className="font-bold text-gray-900">GRANDE FINAL</h3>
                </div>
                {final.map(match => (
                  <div
                    key={match.id}
                    className="bg-gradient-to-br from-yellow-100 to-yellow-200 backdrop-blur-md rounded-lg p-6 border-2 border-yellow-500 hover:shadow-lg transition-all"
                  >
                    {/* Teams */}
                    <div className="space-y-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{match.flag1}</span>
                        <span className="text-gray-900 font-bold text-lg flex-1">
                          {match.team1}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{match.flag2}</span>
                        <span className="text-gray-900 font-bold text-lg flex-1">
                          {match.team2}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-2 text-sm text-gray-700 pt-4 border-t border-yellow-500">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-bold">
                          {new Date(match.date + "T00:00:00").toLocaleDateString("pt-BR", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          })} - {match.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-bold">{match.stadium}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            Sobre a Fase Eliminatória
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Os 16 classificados (2 de cada grupo) avançam para as oitavas de final</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Em caso de empate no tempo normal, há prorrogação (2 tempos de 15 minutos)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Se persistir o empate, a decisão vai para os pênaltis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>A final será disputada no Estádio Lusail, o maior e mais moderno estádio do Catar</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
