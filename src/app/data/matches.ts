export interface Match {
  id: number;
  date: string;
  time: string;
  team1: string;
  team2: string;
  flag1: string;
  flag2: string;
  stadium: string;
  group?: string;
  stage?: string;
  score1?: number;
  score2?: number;
}

export const matches: Match[] = [
  // GRUPO A
  { id: 1, date: "2026-06-11", time: "12:00", team1: "México", team2: "Jamaica", flag1: "🇲🇽", flag2: "🇯🇲", stadium: "Estádio Azteca, Cidade do México", group: "A" },
  { id: 2, date: "2026-06-12", time: "15:00", team1: "Estados Unidos", team2: "Canadá", flag1: "🇺🇸", flag2: "🇨🇦", stadium: "SoFi Stadium, Los Angeles", group: "A" },
  { id: 3, date: "2026-06-16", time: "18:00", team1: "Canadá", team2: "Jamaica", flag1: "🇨🇦", flag2: "🇯🇲", stadium: "BMO Field, Toronto", group: "A" },
  { id: 4, date: "2026-06-17", time: "15:00", team1: "México", team2: "Estados Unidos", flag1: "🇲🇽", flag2: "🇺🇸", stadium: "AT&T Stadium, Dallas", group: "A" },
  { id: 5, date: "2026-06-21", time: "18:00", team1: "Jamaica", team2: "Estados Unidos", flag1: "🇯🇲", flag2: "🇺🇸", stadium: "MetLife Stadium, Nova York", group: "A" },
  { id: 6, date: "2026-06-21", time: "18:00", team1: "Canadá", team2: "México", flag1: "🇨🇦", flag2: "🇲🇽", stadium: "BC Place, Vancouver", group: "A" },

  // GRUPO B
  { id: 7, date: "2026-06-12", time: "12:00", team1: "Inglaterra", team2: "Irã", flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag2: "🇮🇷", stadium: "Gillette Stadium, Boston", group: "B" },
  { id: 8, date: "2026-06-13", time: "15:00", team1: "Senegal", team2: "Austrália", flag1: "🇸🇳", flag2: "🇦🇺", stadium: "Lumen Field, Seattle", group: "B" },
  { id: 9, date: "2026-06-17", time: "12:00", team1: "Austrália", team2: "Irã", flag1: "🇦🇺", flag2: "🇮🇷", stadium: "Lincoln Financial Field, Filadélfia", group: "B" },
  { id: 10, date: "2026-06-18", time: "18:00", team1: "Inglaterra", team2: "Senegal", flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag2: "🇸🇳", stadium: "Hard Rock Stadium, Miami", group: "B" },
  { id: 11, date: "2026-06-22", time: "18:00", team1: "Irã", team2: "Senegal", flag1: "🇮🇷", flag2: "🇸🇳", stadium: "Mercedes-Benz Stadium, Atlanta", group: "B" },
  { id: 12, date: "2026-06-22", time: "18:00", team1: "Austrália", team2: "Inglaterra", flag1: "🇦🇺", flag2: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", stadium: "Arrowhead Stadium, Kansas City", group: "B" },

  // GRUPO C
  { id: 13, date: "2026-06-13", time: "12:00", team1: "Argentina", team2: "Polônia", flag1: "🇦🇷", flag2: "🇵🇱", stadium: "Mercedes-Benz Stadium, Atlanta", group: "C" },
  { id: 14, date: "2026-06-14", time: "15:00", team1: "Colômbia", team2: "Nigéria", flag1: "🇨🇴", flag2: "🇳🇬", stadium: "NRG Stadium, Houston", group: "C" },
  { id: 15, date: "2026-06-18", time: "15:00", team1: "Nigéria", team2: "Polônia", flag1: "🇳🇬", flag2: "🇵🇱", stadium: "Levi's Stadium, São Francisco", group: "C" },
  { id: 16, date: "2026-06-19", time: "12:00", team1: "Argentina", team2: "Colômbia", flag1: "🇦🇷", flag2: "🇨🇴", stadium: "MetLife Stadium, Nova York", group: "C" },
  { id: 17, date: "2026-06-23", time: "18:00", team1: "Polônia", team2: "Colômbia", flag1: "🇵🇱", flag2: "🇨🇴", stadium: "Arrowhead Stadium, Kansas City", group: "C" },
  { id: 18, date: "2026-06-23", time: "18:00", team1: "Nigéria", team2: "Argentina", flag1: "🇳🇬", flag2: "🇦🇷", stadium: "SoFi Stadium, Los Angeles", group: "C" },

  // GRUPO D
  { id: 19, date: "2026-06-14", time: "12:00", team1: "França", team2: "Dinamarca", flag1: "🇫🇷", flag2: "🇩🇰", stadium: "AT&T Stadium, Dallas", group: "D" },
  { id: 20, date: "2026-06-15", time: "15:00", team1: "Tunísia", team2: "Costa Rica", flag1: "🇹🇳", flag2: "🇨🇷", stadium: "Estádio Guadalajara, Guadalajara", group: "D" },
  { id: 21, date: "2026-06-19", time: "15:00", team1: "Costa Rica", team2: "Dinamarca", flag1: "🇨🇷", flag2: "🇩🇰", stadium: "Hard Rock Stadium, Miami", group: "D" },
  { id: 22, date: "2026-06-20", time: "12:00", team1: "França", team2: "Tunísia", flag1: "🇫🇷", flag2: "🇹🇳", stadium: "Lincoln Financial Field, Filadélfia", group: "D" },
  { id: 23, date: "2026-06-24", time: "18:00", team1: "Dinamarca", team2: "Tunísia", flag1: "🇩🇰", flag2: "🇹🇳", stadium: "Gillette Stadium, Boston", group: "D" },
  { id: 24, date: "2026-06-24", time: "18:00", team1: "Costa Rica", team2: "França", flag1: "🇨🇷", flag2: "🇫🇷", stadium: "Estádio Monterrey, Monterrey", group: "D" },

  // GRUPO E
  { id: 25, date: "2026-06-13", time: "18:00", team1: "Espanha", team2: "Itália", flag1: "🇪🇸", flag2: "🇮🇹", stadium: "MetLife Stadium, Nova York", group: "E" },
  { id: 26, date: "2026-06-14", time: "18:00", team1: "Holanda", team2: "Equador", flag1: "🇳🇱", flag2: "🇪🇨", stadium: "Lumen Field, Seattle", group: "E" },
  { id: 27, date: "2026-06-18", time: "12:00", team1: "Equador", team2: "Itália", flag1: "🇪🇨", flag2: "🇮🇹", stadium: "NRG Stadium, Houston", group: "E" },
  { id: 28, date: "2026-06-19", time: "18:00", team1: "Espanha", team2: "Holanda", flag1: "🇪🇸", flag2: "🇳🇱", stadium: "AT&T Stadium, Dallas", group: "E" },
  { id: 29, date: "2026-06-23", time: "15:00", team1: "Itália", team2: "Holanda", flag1: "🇮🇹", flag2: "🇳🇱", stadium: "Levi's Stadium, São Francisco", group: "E" },
  { id: 30, date: "2026-06-23", time: "15:00", team1: "Equador", team2: "Espanha", flag1: "🇪🇨", flag2: "🇪🇸", stadium: "Hard Rock Stadium, Miami", group: "E" },

  // GRUPO F
  { id: 31, date: "2026-06-15", time: "12:00", team1: "Bélgica", team2: "Egito", flag1: "🇧🇪", flag2: "🇪🇬", stadium: "Arrowhead Stadium, Kansas City", group: "F" },
  { id: 32, date: "2026-06-16", time: "15:00", team1: "Alemanha", team2: "Japão", flag1: "🇩🇪", flag2: "🇯🇵", stadium: "Mercedes-Benz Stadium, Atlanta", group: "F" },
  { id: 33, date: "2026-06-20", time: "15:00", team1: "Japão", team2: "Egito", flag1: "🇯🇵", flag2: "🇪🇬", stadium: "Gillette Stadium, Boston", group: "F" },
  { id: 34, date: "2026-06-21", time: "12:00", team1: "Bélgica", team2: "Alemanha", flag1: "🇧🇪", flag2: "🇩🇪", stadium: "SoFi Stadium, Los Angeles", group: "F" },
  { id: 35, date: "2026-06-25", time: "18:00", team1: "Egito", team2: "Alemanha", flag1: "🇪🇬", flag2: "🇩🇪", stadium: "Lumen Field, Seattle", group: "F" },
  { id: 36, date: "2026-06-25", time: "18:00", team1: "Japão", team2: "Bélgica", flag1: "🇯🇵", flag2: "🇧🇪", stadium: "Estádio Azteca, Cidade do México", group: "F" },

  // GRUPO G
  { id: 37, date: "2026-06-15", time: "18:00", team1: "Brasil", team2: "Sérvia", flag1: "🇧🇷", flag2: "🇷🇸", stadium: "SoFi Stadium, Los Angeles", group: "G" },
  { id: 38, date: "2026-06-16", time: "12:00", team1: "Suíça", team2: "Camarões", flag1: "🇨🇭", flag2: "🇨🇲", stadium: "Lincoln Financial Field, Filadélfia", group: "G" },
  { id: 39, date: "2026-06-20", time: "18:00", team1: "Camarões", team2: "Sérvia", flag1: "🇨🇲", flag2: "🇷🇸", stadium: "Estádio Monterrey, Monterrey", group: "G" },
  { id: 40, date: "2026-06-21", time: "15:00", team1: "Brasil", team2: "Suíça", flag1: "🇧🇷", flag2: "🇨🇭", stadium: "MetLife Stadium, Nova York", group: "G" },
  { id: 41, date: "2026-06-25", time: "15:00", team1: "Sérvia", team2: "Suíça", flag1: "🇷🇸", flag2: "🇨🇭", stadium: "Hard Rock Stadium, Miami", group: "G" },
  { id: 42, date: "2026-06-25", time: "15:00", team1: "Camarões", team2: "Brasil", flag1: "🇨🇲", flag2: "🇧🇷", stadium: "AT&T Stadium, Dallas", group: "G" },

  // GRUPO H
  { id: 43, date: "2026-06-16", time: "18:00", team1: "Portugal", team2: "Gana", flag1: "🇵🇹", flag2: "🇬🇭", stadium: "NRG Stadium, Houston", group: "H" },
  { id: 44, date: "2026-06-17", time: "18:00", team1: "Uruguai", team2: "Coreia do Sul", flag1: "🇺🇾", flag2: "🇰🇷", stadium: "Estádio Guadalajara, Guadalajara", group: "H" },
  { id: 45, date: "2026-06-21", time: "12:00", team1: "Coreia do Sul", team2: "Gana", flag1: "🇰🇷", flag2: "🇬🇭", stadium: "Levi's Stadium, São Francisco", group: "H" },
  { id: 46, date: "2026-06-22", time: "15:00", team1: "Portugal", team2: "Uruguai", flag1: "🇵🇹", flag2: "🇺🇾", stadium: "Arrowhead Stadium, Kansas City", group: "H" },
  { id: 47, date: "2026-06-26", time: "18:00", team1: "Gana", team2: "Uruguai", flag1: "🇬🇭", flag2: "🇺🇾", stadium: "Mercedes-Benz Stadium, Atlanta", group: "H" },
  { id: 48, date: "2026-06-26", time: "18:00", team1: "Coreia do Sul", team2: "Portugal", flag1: "🇰🇷", flag2: "🇵🇹", stadium: "BC Place, Vancouver", group: "H" },

  // GRUPO I
  { id: 49, date: "2026-06-12", time: "18:00", team1: "Croácia", team2: "Marrocos", flag1: "🇭🇷", flag2: "🇲🇦", stadium: "Estádio Azteca, Cidade do México", group: "I" },
  { id: 50, date: "2026-06-13", time: "18:00", team1: "Arábia Saudita", team2: "Peru", flag1: "🇸🇦", flag2: "🇵🇪", stadium: "BMO Field, Toronto", group: "I" },
  { id: 51, date: "2026-06-17", time: "15:00", team1: "Peru", team2: "Marrocos", flag1: "🇵🇪", flag2: "🇲🇦", stadium: "SoFi Stadium, Los Angeles", group: "I" },
  { id: 52, date: "2026-06-18", time: "12:00", team1: "Croácia", team2: "Arábia Saudita", flag1: "🇭🇷", flag2: "🇸🇦", stadium: "Estádio Monterrey, Monterrey", group: "I" },
  { id: 53, date: "2026-06-22", time: "15:00", team1: "Marrocos", team2: "Arábia Saudita", flag1: "🇲🇦", flag2: "🇸🇦", stadium: "Lumen Field, Seattle", group: "I" },
  { id: 54, date: "2026-06-22", time: "15:00", team1: "Peru", team2: "Croácia", flag1: "🇵🇪", flag2: "🇭🇷", stadium: "NRG Stadium, Houston", group: "I" },

  // GRUPO J
  { id: 55, date: "2026-06-14", time: "12:00", team1: "País de Gales", team2: "Islândia", flag1: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", flag2: "🇮🇸", stadium: "Levi's Stadium, São Francisco", group: "J" },
  { id: 56, date: "2026-06-15", time: "12:00", team1: "Ucrânia", team2: "Panamá", flag1: "🇺🇦", flag2: "🇵🇦", stadium: "Hard Rock Stadium, Miami", group: "J" },
  { id: 57, date: "2026-06-19", time: "12:00", team1: "Panamá", team2: "Islândia", flag1: "🇵🇦", flag2: "🇮🇸", stadium: "Estádio Guadalajara, Guadalajara", group: "J" },
  { id: 58, date: "2026-06-20", time: "15:00", team1: "País de Gales", team2: "Ucrânia", flag1: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", flag2: "🇺🇦", stadium: "BMO Field, Toronto", group: "J" },
  { id: 59, date: "2026-06-24", time: "15:00", team1: "Islândia", team2: "Ucrânia", flag1: "🇮🇸", flag2: "🇺🇦", stadium: "AT&T Stadium, Dallas", group: "J" },
  { id: 60, date: "2026-06-24", time: "15:00", team1: "Panamá", team2: "País de Gales", flag1: "🇵🇦", flag2: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", stadium: "Lincoln Financial Field, Filadélfia", group: "J" },

  // GRUPO K
  { id: 61, date: "2026-06-13", time: "15:00", team1: "Suécia", team2: "Irlanda", flag1: "🇸🇪", flag2: "🇮🇪", stadium: "BC Place, Vancouver", group: "K" },
  { id: 62, date: "2026-06-14", time: "12:00", team1: "Turquia", team2: "Chile", flag1: "🇹🇷", flag2: "🇨🇱", stadium: "Estádio Monterrey, Monterrey", group: "K" },
  { id: 63, date: "2026-06-18", time: "15:00", team1: "Chile", team2: "Irlanda", flag1: "🇨🇱", flag2: "🇮🇪", stadium: "Gillette Stadium, Boston", group: "K" },
  { id: 64, date: "2026-06-19", time: "15:00", team1: "Suécia", team2: "Turquia", flag1: "🇸🇪", flag2: "🇹🇷", stadium: "Estádio Azteca, Cidade do México", group: "K" },
  { id: 65, date: "2026-06-23", time: "12:00", team1: "Irlanda", team2: "Turquia", flag1: "🇮🇪", flag2: "🇹🇷", stadium: "Mercedes-Benz Stadium, Atlanta", group: "K" },
  { id: 66, date: "2026-06-23", time: "12:00", team1: "Chile", team2: "Suécia", flag1: "🇨🇱", flag2: "🇸🇪", stadium: "NRG Stadium, Houston", group: "K" },

  // GRUPO L
  { id: 67, date: "2026-06-15", time: "15:00", team1: "Rússia", team2: "Argélia", flag1: "🇷🇺", flag2: "🇩🇿", stadium: "MetLife Stadium, Nova York", group: "L" },
  { id: 68, date: "2026-06-16", time: "12:00", team1: "Paraguai", team2: "Noruega", flag1: "🇵🇾", flag2: "🇳🇴", stadium: "Estádio Guadalajara, Guadalajara", group: "L" },
  { id: 69, date: "2026-06-20", time: "12:00", team1: "Noruega", team2: "Argélia", flag1: "🇳🇴", flag2: "🇩🇿", stadium: "Arrowhead Stadium, Kansas City", group: "L" },
  { id: 70, date: "2026-06-21", time: "15:00", team1: "Rússia", team2: "Paraguai", flag1: "🇷🇺", flag2: "🇵🇾", stadium: "Lumen Field, Seattle", group: "L" },
  { id: 71, date: "2026-06-25", time: "12:00", team1: "Argélia", team2: "Paraguai", flag1: "🇩🇿", flag2: "🇵🇾", stadium: "Levi's Stadium, São Francisco", group: "L" },
  { id: 72, date: "2026-06-25", time: "12:00", team1: "Noruega", team2: "Rússia", flag1: "🇳🇴", flag2: "🇷🇺", stadium: "Gillette Stadium, Boston", group: "L" },

  // OITAVAS DE FINAL (32 times avançam)
  { id: 73, date: "2026-06-29", time: "15:00", team1: "1º A", team2: "2º B", flag1: "🏆", flag2: "🏆", stadium: "MetLife Stadium, Nova York", stage: "Oitavas" },
  { id: 74, date: "2026-06-29", time: "18:00", team1: "1º C", team2: "2º D", flag1: "🏆", flag2: "🏆", stadium: "AT&T Stadium, Dallas", stage: "Oitavas" },
  { id: 75, date: "2026-06-30", time: "15:00", team1: "1º E", team2: "2º F", flag1: "🏆", flag2: "🏆", stadium: "SoFi Stadium, Los Angeles", stage: "Oitavas" },
  { id: 76, date: "2026-06-30", time: "18:00", team1: "1º G", team2: "2º H", flag1: "🏆", flag2: "🏆", stadium: "Hard Rock Stadium, Miami", stage: "Oitavas" },
  { id: 77, date: "2026-07-01", time: "15:00", team1: "1º B", team2: "2º A", flag1: "🏆", flag2: "🏆", stadium: "Levi's Stadium, São Francisco", stage: "Oitavas" },
  { id: 78, date: "2026-07-01", time: "18:00", team1: "1º D", team2: "2º C", flag1: "🏆", flag2: "🏆", stadium: "Mercedes-Benz Stadium, Atlanta", stage: "Oitavas" },
  { id: 79, date: "2026-07-02", time: "15:00", team1: "1º F", team2: "2º E", flag1: "🏆", flag2: "🏆", stadium: "Arrowhead Stadium, Kansas City", stage: "Oitavas" },
  { id: 80, date: "2026-07-02", time: "18:00", team1: "1º H", team2: "2º G", flag1: "🏆", flag2: "🏆", stadium: "Lincoln Financial Field, Filadélfia", stage: "Oitavas" },
  { id: 81, date: "2026-07-03", time: "15:00", team1: "1º I", team2: "2º J", flag1: "🏆", flag2: "🏆", stadium: "Gillette Stadium, Boston", stage: "Oitavas" },
  { id: 82, date: "2026-07-03", time: "18:00", team1: "1º K", team2: "2º L", flag1: "🏆", flag2: "🏆", stadium: "NRG Stadium, Houston", stage: "Oitavas" },
  { id: 83, date: "2026-07-04", time: "15:00", team1: "1º J", team2: "2º I", flag1: "🏆", flag2: "🏆", stadium: "Lumen Field, Seattle", stage: "Oitavas" },
  { id: 84, date: "2026-07-04", time: "18:00", team1: "1º L", team2: "2º K", flag1: "🏆", flag2: "🏆", stadium: "BC Place, Vancouver", stage: "Oitavas" },
  { id: 85, date: "2026-07-05", time: "15:00", team1: "3º Melhor A/B/C", team2: "3º Melhor D/E/F", flag1: "🏆", flag2: "🏆", stadium: "Estádio Azteca, Cidade do México", stage: "Oitavas" },
  { id: 86, date: "2026-07-05", time: "18:00", team1: "3º Melhor G/H/I", team2: "3º Melhor J/K/L", flag1: "🏆", flag2: "🏆", stadium: "Estádio Guadalajara, Guadalajara", stage: "Oitavas" },
  { id: 87, date: "2026-07-06", time: "15:00", team1: "3º Melhor E/F", team2: "3º Melhor K/L", flag1: "🏆", flag2: "🏆", stadium: "Estádio Monterrey, Monterrey", stage: "Oitavas" },
  { id: 88, date: "2026-07-06", time: "18:00", team1: "3º Melhor C/D", team2: "3º Melhor I/J", flag1: "🏆", flag2: "🏆", stadium: "BMO Field, Toronto", stage: "Oitavas" },

  // QUARTAS DE FINAL
  { id: 89, date: "2026-07-09", time: "15:00", team1: "Vencedor OF1", team2: "Vencedor OF2", flag1: "🏆", flag2: "🏆", stadium: "SoFi Stadium, Los Angeles", stage: "Quartas" },
  { id: 90, date: "2026-07-09", time: "18:00", team1: "Vencedor OF3", team2: "Vencedor OF4", flag1: "🏆", flag2: "🏆", stadium: "Arrowhead Stadium, Kansas City", stage: "Quartas" },
  { id: 91, date: "2026-07-10", time: "15:00", team1: "Vencedor OF5", team2: "Vencedor OF6", flag1: "🏆", flag2: "🏆", stadium: "Hard Rock Stadium, Miami", stage: "Quartas" },
  { id: 92, date: "2026-07-10", time: "18:00", team1: "Vencedor OF7", team2: "Vencedor OF8", flag1: "🏆", flag2: "🏆", stadium: "Mercedes-Benz Stadium, Atlanta", stage: "Quartas" },
  { id: 93, date: "2026-07-11", time: "15:00", team1: "Vencedor OF9", team2: "Vencedor OF10", flag1: "🏆", flag2: "🏆", stadium: "MetLife Stadium, Nova York", stage: "Quartas" },
  { id: 94, date: "2026-07-11", time: "18:00", team1: "Vencedor OF11", team2: "Vencedor OF12", flag1: "🏆", flag2: "🏆", stadium: "AT&T Stadium, Dallas", stage: "Quartas" },
  { id: 95, date: "2026-07-12", time: "15:00", team1: "Vencedor OF13", team2: "Vencedor OF14", flag1: "🏆", flag2: "🏆", stadium: "Lincoln Financial Field, Filadélfia", stage: "Quartas" },
  { id: 96, date: "2026-07-12", time: "18:00", team1: "Vencedor OF15", team2: "Vencedor OF16", flag1: "🏆", flag2: "🏆", stadium: "Levi's Stadium, São Francisco", stage: "Quartas" },

  // SEMIFINAIS
  { id: 97, date: "2026-07-14", time: "18:00", team1: "Vencedor QF1", team2: "Vencedor QF2", flag1: "🏆", flag2: "🏆", stadium: "AT&T Stadium, Dallas", stage: "Semifinal" },
  { id: 98, date: "2026-07-15", time: "18:00", team1: "Vencedor QF3", team2: "Vencedor QF4", flag1: "🏆", flag2: "🏆", stadium: "Mercedes-Benz Stadium, Atlanta", stage: "Semifinal" },
  { id: 99, date: "2026-07-16", time: "18:00", team1: "Vencedor QF5", team2: "Vencedor QF6", flag1: "🏆", flag2: "🏆", stadium: "MetLife Stadium, Nova York", stage: "Semifinal" },
  { id: 100, date: "2026-07-17", time: "18:00", team1: "Vencedor QF7", team2: "Vencedor QF8", flag1: "🏆", flag2: "🏆", stadium: "SoFi Stadium, Los Angeles", stage: "Semifinal" },

  // DISPUTA DE 3º LUGAR
  { id: 101, date: "2026-07-18", time: "15:00", team1: "Perdedor SF1", team2: "Perdedor SF2", flag1: "🥉", flag2: "🥉", stadium: "Hard Rock Stadium, Miami", stage: "3º Lugar" },
  { id: 102, date: "2026-07-18", time: "18:00", team1: "Perdedor SF3", team2: "Perdedor SF4", flag1: "🥉", flag2: "🥉", stadium: "Levi's Stadium, São Francisco", stage: "3º Lugar" },

  // FINAL
  { id: 103, date: "2026-07-19", time: "15:00", team1: "Vencedor SF1", team2: "Vencedor SF2", flag1: "🥇", flag2: "🥇", stadium: "MetLife Stadium, Nova York", stage: "Final" },
  { id: 104, date: "2026-07-19", time: "18:00", team1: "Vencedor SF3", team2: "Vencedor SF4", flag1: "🥇", flag2: "🥇", stadium: "AT&T Stadium, Dallas", stage: "Final" },
];

export const groups = [
  {
    name: "Grupo A",
    teams: [
      { name: "México", flag: "🇲🇽", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Estados Unidos", flag: "🇺🇸", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Canadá", flag: "🇨🇦", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Jamaica", flag: "🇯🇲", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo B",
    teams: [
      { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Senegal", flag: "🇸🇳", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Austrália", flag: "🇦🇺", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Irã", flag: "🇮🇷", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo C",
    teams: [
      { name: "Argentina", flag: "🇦🇷", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Colômbia", flag: "🇨🇴", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Polônia", flag: "🇵🇱", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Nigéria", flag: "🇳🇬", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo D",
    teams: [
      { name: "França", flag: "🇫🇷", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Dinamarca", flag: "🇩🇰", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Tunísia", flag: "🇹🇳", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Costa Rica", flag: "🇨🇷", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo E",
    teams: [
      { name: "Espanha", flag: "🇪🇸", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Holanda", flag: "🇳🇱", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Itália", flag: "🇮🇹", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Equador", flag: "🇪🇨", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo F",
    teams: [
      { name: "Bélgica", flag: "🇧🇪", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Alemanha", flag: "🇩🇪", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Japão", flag: "🇯🇵", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Egito", flag: "🇪🇬", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo G",
    teams: [
      { name: "Brasil", flag: "🇧🇷", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Suíça", flag: "🇨🇭", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Camarões", flag: "🇨🇲", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Sérvia", flag: "🇷🇸", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo H",
    teams: [
      { name: "Portugal", flag: "🇵🇹", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Uruguai", flag: "🇺🇾", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Coreia do Sul", flag: "🇰🇷", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Gana", flag: "🇬🇭", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo I",
    teams: [
      { name: "Croácia", flag: "🇭🇷", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Marrocos", flag: "🇲🇦", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Arábia Saudita", flag: "🇸🇦", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Peru", flag: "🇵🇪", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo J",
    teams: [
      { name: "País de Gales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Ucrânia", flag: "🇺🇦", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Islândia", flag: "🇮🇸", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Panamá", flag: "🇵🇦", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo K",
    teams: [
      { name: "Suécia", flag: "🇸🇪", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Turquia", flag: "🇹🇷", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Chile", flag: "🇨🇱", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Irlanda", flag: "🇮🇪", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
  {
    name: "Grupo L",
    teams: [
      { name: "Rússia", flag: "🇷🇺", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Paraguai", flag: "🇵🇾", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Noruega", flag: "🇳🇴", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
      { name: "Argélia", flag: "🇩🇿", points: 0, played: 0, wins: 0, draws: 0, losses: 0 },
    ],
  },
];
