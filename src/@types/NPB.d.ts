export interface BaseballTeam {
  id: number;
  rank: number;
  name: string;
  playGameCount: number;
  win: number;
  lose: number;
  draw: number;
  pct: number;
  gamesBehind: string;
  remainingGames?: number;
  run: number;
  ra: number;
  hr: number;
  sb: number;
  avg: number;
  era: number;
  e?: number;
  pythagenPat: number;
}

export interface League {
  name: string;
  standings: BaseballTeam[];
}
