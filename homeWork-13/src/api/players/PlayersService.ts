import {baseRequest, post, get, put, remove} from "../baseRequest";
export class PlayersService {

  async playersGet(url: string) {
    return await get(url, String(localStorage.getItem('token')));
  }

  async playersAdd(data:string) {
    return await post('/api/Player/Add', data, String(localStorage.getItem('token')))
  }

}