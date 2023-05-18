import api from "./api";
import { TeamProps } from "../types";

class Team {
  async get(): Promise<TeamProps[]> {
    const { data } = await api.get("/team");
    return data;
  }
}

const team = new Team();
export default team;
