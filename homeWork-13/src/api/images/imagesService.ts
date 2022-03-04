import {baseRequest, post, get, put, remove} from "../baseRequest";
export class imageService {

  async downloadImage(dataImage: FormData) {
    return await post('/api/Image/SaveImage',dataImage, String(localStorage.getItem('token')))
  }

}