import { Coordinate } from "./coordinate"
import { EPlayer, EStone, IPlayer } from "./domainTypes/domainTypes"

export class Player implements IPlayer
{
  public captures = 0
  public lastMove: Coordinate | undefined

  constructor(public color: EPlayer) { }

  public stone = () => this.color === EPlayer.black ?
    EStone.black : EStone.white

  public capture(count: number)
  {
    this.captures += count
    console.log(this)
  }
}
