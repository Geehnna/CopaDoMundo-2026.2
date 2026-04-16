import { useState } from "react";
import { matches } from "../data/matches";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Calendar() {
  const [selectedStage, setSelectedStage] = useState<string>("all");

  const groupStageMatches = matches.filter(m => m.group);
  const knockoutMatches = matches.filter(m => m.stage);

  const getMatchesByStage = () => {
    if (selectedStage === "all") return matches;
    if (selectedStage === "groups") return groupStageMatches;
    if (selectedStage === "knockout") return knockoutMatches;
    return matches.filter(m => m.stage === selectedStage);
  };

  const filteredMatches = getMatchesByStage();

  // Group matches by date
  const matchesByDate = filteredMatches.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = [];
    }
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, typeof matches>);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <CalendarIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calendário Completo
          </h1>
          <p className="text-gray-600 text-lg">
            Todos os jogos da Copa do Mundo 2026
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedStage}>
            <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-6 bg-white/80 backdrop-blur-md border border-gray-200">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Todos
              </TabsTrigger>
              <TabsTrigger value="groups" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Grupos
              </TabsTrigger>
              <TabsTrigger value="Oitavas" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Oitavas
              </TabsTrigger>
              <TabsTrigger value="Quartas" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Quartas
              </TabsTrigger>
              <TabsTrigger value="Semifinal" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Semifinais
              </TabsTrigger>
              <TabsTrigger value="Final" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Final
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Matches by Date */}
        <div className="space-y-8">
          {Object.entries(matchesByDate).map(([date, dateMatches]) => (
            <div key={date}>
              <div className="bg-white/80 backdrop-blur-md rounded-lg px-6 py-3 mb-4 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 capitalize text-lg">
                  {formatDate(date)}
                </h3>
              </div>

              <div className="grid gap-4">
                {dateMatches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Match Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          {match.group && (
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold border border-blue-200">
                              Grupo {match.group}
                            </span>
                          )}
                          {match.stage && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold border border-yellow-200">
                              {match.stage}
                            </span>
                          )}
                        </div>

                        {/* Teams */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3 flex-1">
                            <span className="text-4xl">{match.flag1}</span>
                            <span className="text-gray-900 font-bold text-lg">
                              {match.team1}
                            </span>
                          </div>

                          <div className="text-gray-400 font-bold px-4">VS</div>

                          <div className="flex items-center gap-3 flex-1 justify-end">
                            <span className="text-gray-900 font-bold text-lg text-right">
                              {match.team2}
                            </span>
                            <span className="text-4xl">{match.flag2}</span>
                          </div>
                        </div>

                        {/* Location & Time */}
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{match.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{match.stadium}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
