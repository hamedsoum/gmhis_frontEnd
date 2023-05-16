import { IBedroomType } from "./bedroom-type.model";
import { IFloor } from "./floor.model";

export interface IRoom {
  id: 0;
  bedroomType: IBedroomType;
  libelle: string;
  storey: IFloor;
}
