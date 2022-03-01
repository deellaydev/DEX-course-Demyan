export interface ITeam {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
}

export interface ITeams{
  data: Array<ITeam>
  count: number;
  page: number;
  size: number
}

export interface IAddTeam {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}

export interface IGetTeams {
  name?: string;
  page?:number;
  pageSize?:number;
}

export interface IGetTeam {
  id: number | null
}