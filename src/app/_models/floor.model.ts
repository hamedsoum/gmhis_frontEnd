import { IBuilding } from "./building.model";

export interface IFloor {
  id: number;
  libelle: string;
  building: IBuilding;
}
