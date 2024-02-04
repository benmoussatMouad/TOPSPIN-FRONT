export interface SectionData {
  id: number;
  Image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  h3: string;
  information?: string;
  points?: string;
}

export interface TranslatedContent {
  information?: string;
}
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

type Image = {
  width: number;
  height: number;
  alt: string;
  src: string;
};

type Link = {
  url: string;
  blank?: boolean;
};

type InfoSectionItem = {
  Image: Image;
  Link: Link;
};

type PlayerItem = {
  id: number;
  Image: Image;
  h3: string;
  points?: string;
};

type CoachItem = {
  id: number;
  Image: Image;
  h3: string;
  information?: string;
};

type HomePage = {
  infoSection: InfoSectionItem[];
  players: PlayerItem[];
  coaches: CoachItem[];
};

type CankayaPage = {
  infoSection: InfoSectionItem[];
  coaches: CoachItem[];
};

type LeagueInfoPage = {
  infoSection: {
    Image: Image;
    Link: Link;
  };
};

type PrivateLessonsPage = {
  infoSection: InfoSectionItem[];
};

type OurMissionPage = {
  coaches: CoachItem[];
};

type ManagementPage = {
  infoSection: {
    Image: Image;
    Link: Link;
  };
};

type AcademyPage = {
  coaches: CoachItem[];
};

export type TennisPages = {
  homepage: HomePage;
  cankaya: CankayaPage;
  leagueInfo: LeagueInfoPage;
  PrivateLessons: PrivateLessonsPage;
  ourMission: OurMissionPage;
  Management: ManagementPage;
  academy: AcademyPage;
};

export type TennisJsonType = {
  [key: string]: TennisPages;
};