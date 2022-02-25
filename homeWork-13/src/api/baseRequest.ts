const BASE_URL = 'http://dev.trainee.dex-it.ru'

export const baseRequest = async (url:string, method:string = 'GET', body:string | null = null, headers:HeadersInit = {'Content-Type': 'application/json'}) => {
  try {
    const responce = await fetch(`${BASE_URL}${url}`, {method, body, headers})
    if (!responce.ok) {
      throw new Error(`Couldn't fetch ${BASE_URL}${url}. Fetch status: ${responce.status}`)
    }
    return await responce.json()
  }
  catch (e) {
    throw e
  }
}