export interface TeamProps{
    id: number;
    name: string;
}

export interface MatchProps{
    id: number;
    date: string;
    host: TeamProps;
    visitor: TeamProps;
}

export interface ContextProps {
    team: TeamProps | undefined;
    teams: TeamProps[];
    matches: MatchProps[];
    theme: ThemeProps;
    setTeam: Function;
    setTheme: Function;
}

export interface ThemeProps {
    name: string;
    background: string;
    main: string;
    title: string;
    text: string;
    imgbackground: string;
}
