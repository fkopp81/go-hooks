import { Coordinate } from "./coordinate"
import { EStone } from "./domainTypes/domainTypes"

export class Group
{
  constructor(public color: EStone, public coordinates: Coordinate[]) { }
}
