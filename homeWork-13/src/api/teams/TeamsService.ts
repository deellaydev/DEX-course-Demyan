import {baseRequest} from "../baseRequest";

export class TeamsService {

  async teamsGet() {
    return await baseRequest('api/Team/Get', 'GET', null, {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`})
  }

  async teamsAdd(data:string) {
    return await baseRequest('api/Team/Add', 'POST', data, {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`})
  }

}