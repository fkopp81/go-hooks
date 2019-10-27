import { EPlayer } from "./domainTypes/domainTypes"

export class Turn
{
  public counter = 1
  public player: EPlayer = EPlayer.black

  public end()
  {
    this.counter++
    this.player = this.counter % 2 ? EPlayer.black : EPlayer.white
  }
}
