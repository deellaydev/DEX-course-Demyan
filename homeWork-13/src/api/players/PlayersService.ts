import {baseRequest, post, get, put, remove} from "../baseRequest";
export class PlayersService {

  async playersGet(url: string) {
    return await get(url, String(localStorage.getItem('token')));
  }

  async playersAdd(data:string) {
    return await post('/api/Player/Add', data, String(localStorage.getItem('token')))
  }

  async getPlayerById(url: string) {
    return await  get(url, String(localStorage.getItem('token')));
  }

  async deletePlayerById(id: number) {
    return await remove(`/api/Player/Delete?id=${id}`, String(localStorage.getItem('token')));
  }

  async updatePlayer(data: string) {
    return await put('/api/Player/Update', data, String(localStorage.getItem('token')));
  }

}