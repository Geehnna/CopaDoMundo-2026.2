import { useEffect, useState } from "react";
import { Users, Trophy } from "lucide-react";

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
  unitedstates: "us",
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

  /* 🔥 SUA API */
  southafrica: "za",
  czechia: "cz",
  korea: "kr",
  southkorea: "kr",
  "korearepublic": "kr",
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

  /* 🔥 CASOS PROBLEMÁTICOS */
  "cotedivoire": "ci",
  ivorycoast: "ci",
  "côtedivoire": "ci",

  "congodra": "cd",
  "drcongo": "cd",
  congo: "cd",

  "caboverde": "cv",
  "capeverde": "cv",

  "curaçao": "cw",
  curacao: "cw",

  "iriran": "ir",
  iran: "ir",

  scotland: "gb-sct",
};

/* 🔥 NORMALIZAÇÃO ULTRA FORTE */
function normalize(name: string) {
  return (name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z]/g, ""); // remove tudo que não for letra
}

/* 🔥 BUSCA INTELIGENTE COM FALLBACKS */
function getFlag(name: string) {
  const n = normalize(name);

  // 1. match direto
  if (flagMap[n]) return flagMap[n];

  // 2. fallback manual comum
  if (n.includes("korea")) return "kr";
  if (n.includes("usa") || n.includes("unitedstates")) return "us";
  if (n.includes("czech")) return "cz";
  if (n.includes("southafrica")) return "za";
  if (n.includes("cotedivoire") || n.includes("ivory")) return "ci";
  if (n.includes("congo")) return "cd";
  if (n.includes("capeverde")) return "cv";
  if (n.includes("curacao")) return "cw";
  if (n.includes("iran")) return "ir";

  return "un";
}

type Team = {
  name: string;
  group: string;
  points: number;
  played: number;
  wins: number;
  losses: number;
};

export function Groups() {
  const [groups, setGroups] = useState<Record<string, Team[]>>({});
  const [loading, setLoading] = useState(true);

  async function fetchAPI(path: string) {
    const res = await fetch(API + path, {
      headers: {
        Authorization: "Bearer " + KEY,
      },
    });

    return res.json();
  }

  useEffect(() => {
    async function load() {
      try {
        const teams = await fetchAPI("/teams");
        const matches = await fetchAPI("/matches");

        const table: Record<string, Record<string, Team>> = {};

        teams.forEach((t: any) => {
          if (!table[t.group_name]) table[t.group_name] = {};

          table[t.group_name][t.name] = {
            name: t.name,
            group: t.group_name,
            points: 0,
            played: 0,
            wins: 0,
            losses: 0,
          };
        });

        matches.forEach((m: any) => {
          const home = table[m.group_name]?.[m.home_team];
          const away = table[m.group_name]?.[m.away_team];

          if (!home || !away) return;

          const homeScore = Number(m.home_score ?? 0);
          const awayScore = Number(m.away_score ?? 0);

          if (homeScore === 0 && awayScore === 0) return;

          home.played++;
          away.played++;

          if (homeScore > awayScore) {
            home.wins++;
            home.points += 3;
            away.losses++;
          } else if (homeScore < awayScore) {
            away.wins++;
            away.points += 3;
            home.losses++;
          } else {
            home.points++;
            away.points++;
          }
        });

        const result: Record<string, Team[]> = {};

        Object.keys(table).forEach((g) => {
          result[g] = Object.values(table[g]).sort(
            (a, b) => b.points - a.points
          );
        });

        setGroups(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <div className="text-center py-20">Carregando...</div>;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h1 className="text-4xl font-bold">Fase de Grupos</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(groups).map(([group, teams]) => (
            <div key={group} className="bg-white p-6 rounded-xl border">
              <div className="flex justify-between mb-4">
                <h2 className="font-bold">Grupo {group}</h2>
                <Trophy className="text-yellow-500" />
              </div>

              <div className="grid grid-cols-[24px_1fr_40px_40px_40px_40px] text-xs font-bold text-gray-500 mb-2">
                <div>#</div>
                <div>Time</div>
                <div>PTS</div>
                <div>J</div>
                <div>V</div>
                <div>D</div>
              </div>

              {teams.map((t, i) => (
                <div
                  key={t.name}
                  className={`grid grid-cols-[24px_1fr_40px_40px_40px_40px] p-2 rounded items-center ${
                    i < 2 ? "bg-green-100" : "bg-gray-50"
                  }`}
                >
                  <div className="text-xs">{i + 1}</div>

                  {/* 🇧🇷 BANDEIRA GARANTIDA */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`fi fi-${getFlag(t.name)} fis text-xl`} />
                    <span className="truncate text-sm font-medium">
                      {t.name}
                    </span>
                  </div>

                  <div className="text-center font-bold">{t.points}</div>
                  <div className="text-center">{t.played}</div>
                  <div className="text-center text-green-600">{t.wins}</div>
                  <div className="text-center text-red-600">{t.losses}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
