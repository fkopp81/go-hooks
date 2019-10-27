export class Coordinate
{
  constructor(public x: number, public y: number)
  {
    if (x === 0 || y === 0) throw new Error("x and y must be positive")
  }

  public equal(coordinate: Coordinate)
  {
    return this.x === coordinate.x && this.y === coordinate.y
  }

  public validate(size: Coordinate)
  {
    return this.x <= size.x && this.y <= size.y
  }
  public xIndex = () => this.x - 1
  public yIndex = () => this.y - 1
}
