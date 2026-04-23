import { useEffect, useState } from "react";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

const API = "https://api.wc2026api.com";
const KEY = "wc26_BYhbyQezyWzy8sCggqf8ii";

type Match = {
  id: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
  stadium: string;
  group?: string;
  stage?: string;
};

export function Calendar() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedStage, setSelectedStage] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  async function fetchAPI(path: string) {
    const res = await fetch(API + path, {
      headers: {
        Authorization: "Bearer " + KEY,
      },
    });

    const json = await res.json();
    return json;
  }

  function mapStage(round: string) {
    switch (round) {
      case "group":
        return "groups";
      case "R16":
        return "Oitavas";
      case "QF":
        return "Quartas";
      case "SF":
        return "Semifinal";
      case "final":
        return "Final";
      default:
        return "groups";
    }
  }

  useEffect(() => {
    async function loadMatches() {
      try {
        const response = await fetchAPI("/matches");

        const data = Array.isArray(response)
          ? response
          : response.data || [];

        const formatted: Match[] = data.map((m: any) => {
          const rawDate = m.datetime || m.date;

          // 🔥 garante que sempre existe data válida
          const safeDate = rawDate ? new Date(rawDate) : new Date();

          return {
            id: m.id || Math.random().toString(),

            date: safeDate.toISOString().split("T")[0],

            time: safeDate.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            }),

            team1: m.home_team || "Time 1",
            team2: m.away_team || "Time 2",

            stadium: `${m.stadium || "A definir"} ${
              m.stadium_city ? "- " + m.stadium_city : ""
            }`,

            group: m.group_name,
            stage: mapStage(m.round),
          };
        });

        setMatches(formatted);
      } catch (err) {
        console.error("Erro ao carregar jogos:", err);
      } finally {
        setLoading(false);
      }
    }

    loadMatches();
  }, []);

  const getMatchesByStage = () => {
    if (selectedStage === "all") return matches;
    if (selectedStage === "groups")
      return matches.filter((m) => m.group);
    return matches.filter((m) => m.stage === selectedStage);
  };

  const filteredMatches = getMatchesByStage();

  // 🔥 agrupamento seguro (nunca quebra)
  const matchesByDate = filteredMatches.reduce((acc, match) => {
    const key = match.date || "sem-data";

    if (!acc[key]) acc[key] = [];
    acc[key].push(match);

    return acc;
  }, {} as Record<string, Match[]>);

  const formatDate = (dateStr: string) => {
    if (dateStr === "sem-data") return "Data indefinida";

    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  if (loading) {
    return <div className="text-center py-20">Carregando jogos...</div>;
  }

  if (!matches.length) {
    return (
      <div className="text-center py-20 text-red-500">
        Nenhum jogo encontrado 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <CalendarIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">
            Calendário Completo
          </h1>
          <p className="text-gray-600">
            Jogos atualizados da API
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" onValueChange={setSelectedStage}>
          <TabsList className="grid grid-cols-2 md:grid-cols-6">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="groups">Grupos</TabsTrigger>
            <TabsTrigger value="Oitavas">Oitavas</TabsTrigger>
            <TabsTrigger value="Quartas">Quartas</TabsTrigger>
            <TabsTrigger value="Semifinal">Semi</TabsTrigger>
            <TabsTrigger value="Final">Final</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Lista de jogos */}
        <div className="space-y-8 mt-8">
          {Object.entries(matchesByDate).map(([date, list]) => (
            <div key={date}>
              <h3 className="font-bold text-lg mb-4 capitalize">
                {formatDate(date)}
              </h3>

              <div className="grid gap-4">
                {list.map((match) => (
                  <div
                    key={match.id}
                    className="p-4 border rounded-xl bg-white/80 backdrop-blur-md"
                  >
                    <div className="mb-2 text-sm text-gray-500">
                      {match.group
                        ? `Grupo ${match.group}`
                        : match.stage}
                    </div>

                    <div className="flex justify-between font-bold">
                      <span>{match.team1}</span>
                      <span>VS</span>
                      <span>{match.team2}</span>
                    </div>

                    <div className="flex gap-4 text-sm mt-2 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {match.time}
                      </div>

                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {match.stadium}
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
