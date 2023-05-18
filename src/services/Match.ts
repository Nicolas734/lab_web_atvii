import api from "./api";
import { MatchProps } from "../types";

class Match {
  async get(): Promise<MatchProps[]> {
    const { data } = await api.get("/match");
    return data;
  }

  async getByTeam(id:number): Promise<MatchProps[]> {
    const { data } = await api.get(`/match/${id}`);
    return data;
  }
}

const match = new Match();
export default match;
