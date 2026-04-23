import { useEffect, useState } from "react";
import { Target, Clock, MapPin } from "lucide-react";

const API = "https://api.wc2026api.com";
const KEY = "wc26_BYhbyQezyWzy8sCggqf8ii";

const flagMap: Record<string, string> = {
  brazil: "br",
  france: "fr",
  germany: "de",
  spain: "es",
  italy: "it",
  england: "gb",
  usa: "us",
  mexico: "mx",
  canada: "ca",
  japan: "jp",
  sweden: "se",
  switzerland: "ch",
  portugal: "pt",
  uruguay: "uy",
  argentina: "ar",
  belgium: "be",
  netherlands: "nl",
  croatia: "hr",
  morocco: "ma",
  senegal: "sn",
  australia: "au",
  qatar: "qa",
  egypt: "eg",
  algeria: "dz",
  norway: "no",
  southafrica: "za",
  czechia: "cz",
  haiti: "ht",
  turkey: "tr",
  tunisia: "tn",
  saudiarabia: "sa",
  paraguay: "py",
  ecuador: "ec",
  colombia: "co",
  ghana: "gh",
  iraq: "iq",
  jordan: "jo",
  austria: "at",
  panama: "pa",
  newzealand: "nz",
  congo: "cd",
  uzbekistan: "uz",
  curacao: "cw",
  iran: "ir",
  korea: "kr",
  "cote divoire": "ci",
  "cote d'ivoire": "ci",
};

function normalize(name: string) {
  return (name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
}

function getFlag(name: string): string | null {
  const n = normalize(name);

  return (
    flagMap[n] ||
    (n.includes("usa") ? "us" :
    n.includes("korea") ? "kr" :
    n.includes("congo") ? "cd" :
    n.includes("curacao") ? "cw" :
    n.includes("cote") ? "ci" :
    n.includes("iran") ? "ir" :
    null)
  );
}

function Flag({ name }: { name: string }) {
  const code = getFlag(name);

  if (!code) {
    return (
      <span className="text-xs text-gray-400 font-semibold">
        A definir
      </span>
    );
  }

  return <span className={`fi fi-${code} fis text-xl`} />;
}

type Match = {
  id: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
  stadium: string;
  stage: string;
};

export function Knockout() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchAPI(path: string) {
    const res = await fetch(API + path, {
      headers: {
        Authorization: "Bearer " + KEY,
      },
    });

    return res.json();
  }

  function mapRound(round: string) {
    switch (round) {
      case "R16":
        return "Oitavas de Final";
      case "QF":
        return "Quartas de Final";
      case "SF":
        return "Semifinal";
      case "third":
        return "3º Lugar";
      case "final":
        return "Final";
      default:
        return round;
    }
  }

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAPI("/matches");

        const formatted: Match[] = data
          .filter((m: any) => m.round && m.round !== "group")
          .map((m: any) => ({
            id: m.id,
            date: m.date?.split("T")[0],
            time: m.date
              ? new Date(m.date).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "A definir",
            team1: m.home_team,
            team2: m.away_team,
            stadium: m.stadium || "A definir",
            stage: mapRound(m.round),
          }));

        setMatches(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const group = (stage: string) =>
    matches.filter((m) => m.stage === stage);

  const MatchCard = ({ match }: { match: Match }) => (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 border hover:shadow-md transition-all">

      <div className="space-y-3 mb-3">
        <div className="flex items-center gap-2">
          <Flag name={match.team1} />
          <span className="font-bold flex-1">{match.team1}</span>
        </div>

        <div className="flex items-center gap-2">
          <Flag name={match.team2} />
          <span className="font-bold flex-1">{match.team2}</span>
        </div>
      </div>

      <div className="text-xs text-gray-600 border-t pt-3 space-y-1">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {match.time}
        </div>

        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {match.stadium}
        </div>
      </div>
    </div>
  );

  if (loading) return <div className="p-10">Carregando...</div>;

  const stages = [
    "Oitavas de Final",
    "Quartas de Final",
    "Semifinal",
    "3º Lugar",
    "Final",
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <Target className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Fase Eliminatória</h1>
        </div>

        <div className="space-y-12">
          {stages.map((stage) => {
            const list = group(stage);
            if (!list.length) return null;

            return (
              <div key={stage}>
                <h2 className="text-2xl font-bold text-center mb-6">
                  {stage}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {list.map((m) => (
                    <MatchCard key={m.id} match={m} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* FINAL destaque */}
        {group("Final").map((m) => (
          <div
            key={m.id}
            className="mt-10 bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl border-2 border-yellow-500 max-w-2xl mx-auto"
          >
            <div className="text-center font-bold mb-4">
              🏆 GRANDE FINAL
            </div>

            <div className="flex justify-between items-center text-lg font-bold">
              <div className="flex items-center gap-2">
                <Flag name={m.team1} />
                {m.team1}
              </div>

              <span>VS</span>

              <div className="flex items-center gap-2">
                {m.team2}
                <Flag name={m.team2} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
