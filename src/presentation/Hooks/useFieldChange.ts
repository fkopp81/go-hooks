import React from "react"
import { Coordinate } from "../../domain/coordinate"
import { EStone } from "../../domain/domainTypes/domainTypes"
import { FieldChange, TFieldChangeCallback } from "../../services/game/fieldChange"

export function useFieldChange(
  coordinate: Coordinate,
  fieldChange: FieldChange,
  initialState: EStone)
{
  const [fieldState, setFieldState] = React.useState(initialState)
  const callback = (newStoneState: EStone) => setFieldState(newStoneState)
  fieldChange.subscribe(coordinate, callback)
  return fieldState
}
