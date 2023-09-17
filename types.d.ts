export interface Ottelulistaus {
    id:               number;
    season:           number;
    start:            Date;
    end?:             Date;
    homeTeam:         HomeTeam;
    awayTeam:         AwayTeam;
    finishedType:     FinishedType;
    started:          boolean;
    ended:            boolean;
    gameTime?:        number;
    spectators?:      number;
    cacheUpdateDate?: Date;
    stale:            boolean;
    serie:            Serie;
    buyTicketsUrl?:   string;
    gamblingEvent?:   GamblingEvent;
}

export interface AwayTeam {
    teamId:               TeamID;
    teamPlaceholder:      null;
    teamName:             TeamName;
    goals:                number;
    timeOut:              null;
    goalEvents?:          GoalEvent[];
    powerplayInstances:   number;
    powerplayGoals:       number;
    shortHandedInstances: number;
    shortHandedGoals:     number;
    ranking:              null;
    gameStartDateTime:    Date;
}

export interface GoalEvent {
    scorerPlayerId:       number;
    logTime:              Date;
    winningGoal:          boolean;
    gameTime:             number;
    period:               number;
    eventId:              number;
    goalTypes:            string[];
    assistantPlayerIds:   number[];
    plusPlayerIds:        null | string;
    minusPlayerIds:       null | string;
    homeTeamScore:        number;
    awayTeamScore:        number;
    assistsSoFarInSeason: { [key: string]: number } | null;
    goalsSoFarInSeason:   number;
    videoClipUrl:         null | string;
    videoThumbnailUrl:    null | string;
}

export enum TeamID {
    The168761288Hifk = "168761288:hifk",
    The219244634Jyp = "219244634:jyp",
    The292293444Jukurit = "292293444:jukurit",
    The362185137Tappara = "362185137:tappara",
    The461765763Kookoo = "461765763:kookoo",
    The495643563Kärpät = "495643563:kärpät",
    The55786244Hpk = "55786244:hpk",
    The624554857Lukko = "624554857:lukko",
    The626537494Sport = "626537494:sport",
    The651304385Tps = "651304385:tps",
    The679171680Ässät = "679171680:ässät",
    The859884935Kalpa = "859884935:kalpa",
    The875886777Pelicans = "875886777:pelicans",
    The933686567Saipa = "933686567:saipa",
    The951626834Ilves = "951626834:ilves",
}

export enum TeamName {
    Hifk = "HIFK",
    Hpk = "HPK",
    Ilves = "Ilves",
    Jukurit = "Jukurit",
    Jyp = "JYP",
    KalPa = "KalPa",
    KooKoo = "KooKoo",
    Kärpät = "Kärpät",
    Lukko = "Lukko",
    Pelicans = "Pelicans",
    SaiPa = "SaiPa",
    Sport = "Sport",
    Tappara = "Tappara",
    Tps = "TPS",
    Ässät = "Ässät",
}

export enum FinishedType {
    ActiveOrNotStarted = "ACTIVE_OR_NOT_STARTED",
    EndedDuringExtendedGameTime = "ENDED_DURING_EXTENDED_GAME_TIME",
    EndedDuringRegularGameTime = "ENDED_DURING_REGULAR_GAME_TIME",
    EndedDuringWinningShotCompetition = "ENDED_DURING_WINNING_SHOT_COMPETITION",
}

export interface GamblingEvent {
    homeTeamOdds: number;
    awayTeamOdds: number;
    tieOdds:      number;
    url:          string;
}

export interface HomeTeam {
    teamId:               TeamID;
    teamPlaceholder:      null;
    teamName:             TeamName;
    goals:                number;
    timeOut:              null;
    goalEvents?:          GoalEvent[];
    powerplayInstances:   number;
    powerplayGoals:       number;
    shortHandedInstances: number;
    shortHandedGoals:     number;
    ranking:              null;
    gameStartDateTime:    Date;
}

export enum Serie {
    Runkosarja = "RUNKOSARJA",
}
