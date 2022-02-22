export const BASED_URL = 'http://dev.trainee.dex-it.ru/'

interface IBaseRequestProps {
  url: string;
  method: string
  headers?: {
    "Content-Type"?: "application/json";
    Accept?: "application/json";
    Authorization?: string;
  },
  body?: FormData | string;
}

export const baseRequest = async ({ url, ...rest }: IBaseRequestProps) => {
  return await fetch(BASED_URL + url, { ...rest });
};