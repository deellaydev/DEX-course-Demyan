import {baseRequest, put, post, get, remove} from "../baseRequest";
import {IGetTeams} from "../dto/Teams";

export class TeamsService {

  async teamsGet(url: string) {
    return await get(url, String(localStorage.getItem('token')));
  }

  async teamsAdd(data:string) {
    return await post('/api/Team/Add', data , String(localStorage.getItem('token')));
  }

  async getTeamById(url: string) {
    return await  get(url, String(localStorage.getItem('token')));
  }

}