export interface MatchSchedulesT {
  date: string;
  day: string;
  hour: string;
  team1: string;
  team2: string;
}
export interface MatchSchedules {
  id: number;
  date: any;
  day: string;
  hour: string;
  team1: string;
  team2: string;
  team1MatchResult: teamMatchResult[];
  team2MatchResult: teamMatchResult[];
}

export interface teamMatchResult {
  id: number;
  team: string;
  result: number;
}

export interface MatchResultsT {
  team1: string;
  team2: string;
}
