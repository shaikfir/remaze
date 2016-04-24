import {expect} from 'chai';
import {solve} from '../app/solver';

const maze1 =
[
  'XXX',
  'X1X',
  'XXX'
];

const maze2 =
[
  'XXXX',
  'X 1X',
  'XXXX'
];

const maze3 =
[
  'XXXX',
  'X  X',
  'X  X',
  'XXXX'
];

const maze4 =
[
  'XXXXXX',
  'X    X',
  'X    X',
  'X   1X',
  'XXXXXX'
];

const maze4a =
[
  'XXXXXX',
  'X1   X',
  'X    X',
  'X    X',
  'XXXXXX'
];

const maze5 =
[
  'XXXXXX',
  'X    X',
  'XXXX X',
  'X    X',
  'X XXXX',
  'X   1X',
  'XXXXXX'
];

const maze5a =
[
  'XXXXXX',
  'X1   X',
  'XXXX X',
  'X    X',
  'X XXXX',
  'X    X',
  'XXXXXX'
];

const maze6 = [
  'XXXXXXXXXXXXXXXXXXXX',
  'X                  X',
  'X  XXXX  XXXXXXXXXXX',
  'X   X             1X',
  'XXXXXXXXXXXXXXXXXXXX'
];


const maze7 = [
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
];

describe("Solve", function() {
  describe("Solve maze 1", function() {
    it("Solves a saimple Maze", function() {
      expect(solve(1, 1, maze1, [])).to.equal(true);
    });
  });

  describe("Solve maze 2", function() {
    it("Solves a saimple Maze", function() {
      expect(solve(1, 1, maze2, [])).to.equal(true);
    });
  });

  describe("Fail when no exit", function() {
    it("can not solve maze 3", function() {
      expect(solve(1, 1, maze3, [])).to.equal(false);
    });
  });

  describe("Solve maze 4", function() {
    it("Solves maze 4", function() {
      expect(solve(1, 1, maze4, [])).to.equal(true);
    });
  });

  describe("Solve maze 4a", function() {
    it("Solves maze 4a", function() {
      expect(solve(3, 3, maze4a, [])).to.equal(true);
    });
  });

  describe("Solve maze 4 from any starting point", function() {
    var i,j;
    it("Solves maze  4 starting at all ponts", function() {
      for (i=1; i<4; i++) {
        for (j=1; j<4; j++) {
          expect(solve(i, j, maze4, [])).to.equal(true);
        }
      }
    });
  });

  describe("Solve maze 5", function() {
    it("Solves maze 5", function() {
      expect(solve(1, 1, maze5, [])).to.equal(true);
    });
  });

  describe("Solve maze 5a", function() {
    it("Solves maze 5a", function() {
      expect(solve(4, 5, maze5a, [])).to.equal(true);
    });
  });


  describe("Solve maze 6", function() {
    it("Solves maze 6", function() {
      expect(solve(1, 1, maze6, [])).to.equal(true);
    });
  });

  describe("Solve maze 7", function() {
    it("Solves maze 7", function() {
      expect(solve(1, 1, maze7, [])).to.equal(true);
    });
  });

});
