// You are making a mapping application.

// Write an enum that defines the directions:
// North, South, East, West
// Use a string enum: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums

enum Direction {
  North = "NORTH",
  South = "SOUTH",
  East = "EAST",
  West = "WEST",
}

// Should having a heading property type Direction

class MapPosition {
  heading: Direction;
  constructor(heading: Direction) {
    this.heading = heading;
  }

  // takes a new Direction as an argument
  move(newDirection: Direction) {
    this.heading = newDirection;
    // set the direction on your property
    // Print the new direction
    console.log(this.heading);
  }

  // Should return a string and print:
  // "you are heading <direction>"
  describe(): string {
    return `You are heading ${this.heading}`;
  }
}

const location = new MapPosition(Direction.East);
console.log(location.describe());
// Might output:
// "You are heading north"
location.move(Direction.South);

export default MapPosition;
