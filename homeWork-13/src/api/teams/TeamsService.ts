import {baseRequest, put, post, get, remove} from "../baseRequest";
import {IGetTeams} from "../dto/teams";

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

  async deleteTeamById(id: number) {
    return await remove(`/api/Team/Delete?id=${id}`, String(localStorage.getItem('token')));
  }

  async updateTeam(data: string) {
    return await put('/api/Team/Update', data, String(localStorage.getItem('token')));
  }

}