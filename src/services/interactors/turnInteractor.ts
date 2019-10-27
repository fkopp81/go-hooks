import { BehaviorSubject } from "rxjs"

import { EPlayer } from "../../domain/domainTypes/domainTypes"
import { Turn } from "../../domain/turn"

export class TurnInteractor
{
  public subject: BehaviorSubject<EPlayer>
  constructor(public turn: Turn)
  {
    this.subject = new BehaviorSubject(turn.player)
  }
  public end()
  {
    this.turn.end()
    this.update()
  }

  public currentPlayer = () => this.turn.player

  public update()
  {
    this.subject.next(this.turn.player)
  }
}
