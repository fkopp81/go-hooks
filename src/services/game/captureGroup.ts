import { Group } from "../../domain/group"
import { EPlayer, EStone, IPlayers } from "./../../domain/domainTypes/domainTypes"
import { Player } from "./../../domain/player";
import { FieldChange } from "./fieldChange"

export function captureGroup(
  fieldChange: FieldChange,
  group: Group,
  players: IPlayers)
{
  if (group.color === EStone.empty) return
  const player: EPlayer = group.color === EStone.black ? EPlayer.white :
    EPlayer.black;
  (players[player] as Player).capture(group.coordinates.length)
  fieldChange.changeGroup(group, EStone.empty)
}
