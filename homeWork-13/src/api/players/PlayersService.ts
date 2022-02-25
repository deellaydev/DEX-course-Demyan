import {baseRequest} from "../baseRequest";

export class PlayersService {

  async playersGet() {
    return await baseRequest('/api/Player/Get', 'GET', null, {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`})
  }

  async playersAdd(data:string) {
    return await baseRequest('/api/Player/Add', 'POST', data, {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`})
  }

}