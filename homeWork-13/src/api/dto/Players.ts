export interface IPlayer {
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  avatarUrl: string;
  id: number
}

export interface IPlayers{
  data: Array<IPlayer>
  count: number;
  page: number;
  size: number;
}

export interface IAddPlayer {
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  avatarUrl: string;
}

export interface IGetPlayers {
  name?: string;
  teamsLds: Array<number> | null;
  page?:number;
  pageSize?:number;
}

export interface IGetPlayer {
  id: number | null
}