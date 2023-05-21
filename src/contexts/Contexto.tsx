import { createContext, useEffect, useState } from "react";
import { TeamProps, MatchProps, ContextProps, ThemeProps } from "../types";
import Team from "../services/Team";
import Match from "../services/Match";
import { dark, light } from "../styles/theme";
import { ThemeProvider } from "styled-components";

const Contexto = createContext({} as ContextProps);

function Provider({ children }: any) {
  const [team, setTeam] = useState<TeamProps | undefined>();
  const [teams, setTeams] = useState([] as TeamProps[]);
  const [matches, setMatches] = useState([] as MatchProps[]);
  const [theme, setTheme] = useState<ThemeProps>(light);

  useEffect(() => {
    (async () => {
      const teamReq: TeamProps[] = await Team.get();
      setTeams(teamReq);
      console.log(teamReq)
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (team !== undefined) {
        const matchReq: MatchProps[] = await Match.getByTeam(team.id);
        setMatches(matchReq);
      } else {
        const matchReq: MatchProps[] = await Match.get();
        setMatches(matchReq);
      }
    })();
  }, [team]);

  return (
    <ThemeProvider theme={theme}>
      <Contexto.Provider
        value={{ team, teams, matches, theme, setTeam, setTheme }}
      >
        {children}
      </Contexto.Provider>
    </ThemeProvider>
  );
}

export { Contexto, Provider };
