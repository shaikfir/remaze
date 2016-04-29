
const mazes = [
  [
    // maze 0
    'XXXXXXXXXXXXXXXXXXXX',
    'X                  X',
    'X  XXXX  XXXXXXXXXXX',
    'X  X    XX         X',
    'XXXXX XXX   X   X  X',
    'X   X     X X   X  X',
    'X   XXXXXXX X   X  X',
    'X           X   X  X',
    'X   X  X        X 1X',
    'XXXXXXXXXXXXXXXXXXXX'
  ],
  [
    // maze 1
    'XXXXXXXXXXXXXXXXXXXX',
    'X                  X',
    'X  XXXX  XXXXXXXXXXX',
    'X  X    XX    X    X',
    'XXXXX XXX   X X X  X',
    'X      X  X X X X  X',
    'XX  XXXXXXX X X X  X',
    'X           X X X  X',
    'X   X  X    X   X 1X',
    'XXXXXXXXXXXXXXXXXXXX'
  ],
  [
    // maze 2
    'XXXXXXXXXXXXXXXXXXXX',
    'X      X     X     X',
    'XXXX   X     X  X  X',
    'X  XX    X   X  X  X',
    'X   X     X     X  X',
    'X  XXXX  XXXXXXXXX X',
    'X  X    XX    X    X',
    'XXXXX XXX   X X X  X',
    'X   X     X X X X  X',
    'XX  XXXXXXX X X X  X',
    'X             X X  X',
    'X   X  X        X 1X',
    'XXXXXXXXXXXXXXXXXXXX'
  ],
  [
    // maze 3
    'XXXXXX',
    'X1   X',
    'XXXX X',
    'X    X',
    'X XXXX',
    'X    X',
    'XXXXXX'
  ],
  [
    // maze 4
    'XXXXXX',
    'X    X',
    'X    X',
    'X   1X',
    'XXXXXX'
  ],
  [
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'X X                                     X',
    'X X      XXXXXXXXXXXXXXXXXXXXXXXX       X',
    'X XXXXXXXX                      X       X',
    'X            XXXXXXXXXXXXX      X       X',
    'XXXXXX XXXXXXX           X      X       X',
    'X      X     X   XXXXXXX X      X       X',
    'X XXXXXX     X   X     X X      X       X',
    'X X    X     X   X XXX X X      X       X',
    'X X    X     X   X  1X X X      X       X',
    'X X    X     X   XXXXX X X      X       X',
    'X X    X     X         X X      X       X',
    'X X    X     XXXXXXXXXXX X      X       X',
    'X X    X  X         X  X X      X       X',
    'X X    X    XX   X     X X      X       X',
    'X X              X     X X      X       X',
    'X XXXXXXXXXXXXXXXX XXXXX X      X       X',
    'X                        X              X',
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  ],
  [
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'X X                                     X      X     X     X     X     X       X',
    'X X      XXXXXXXXXXXXXXXXXXXXXXXX       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X XXXXXXXX                      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X            XXXXXXXXXXXXX      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X      X     X   XXXXXXX X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X XXXXXX     X   X     X X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X    X     X   X  XX X X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X    X     X   X   X X X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X    X     X   XXXXX X X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X    X     X         X X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X    X     XXXXXXXXXXX X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X    X  X            X X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X    X         X     X X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X              X     X X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X XXXXXXXXXXXXXXXX XXXXX X      X       X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X                        X              X   X  X  X  X  X  X  X  X  X  X  X    X',
    'X XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   X  X  X  X  X  X  X  X  X  X  X    X',
    'X X                                         X     X     X     X     X     X    X',
    'X X XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX X',
    'X X                                                                          X X',
    'X XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX X X',
    'X X                                                                          X X',
    'X X XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX X',
    'X X                                                                          X X',
    'X XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX X X',
    'X                                                                            X1X',
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  ]
];
export default mazes;
