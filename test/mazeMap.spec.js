import {expect} from 'chai';
import mazeMap from '../app/mazeMap';


const maze =
[
  'XXXX',
  'X  X',
  'X 1X',
  'XXXX'
]

describe("Maze", function() {
  describe("Maze.getAT", function() {
    it("returns the right stuff", function() {
      expect(mazeMap.get(0, 0, maze)).to.equal(mazeMap.BLOCKED);
      expect(mazeMap.get(2, 1, maze)).to.equal(mazeMap.FREE);
      expect(mazeMap.get(2, 2, maze)).to.equal(mazeMap.EXIT);
    });
  });

  describe("Maze.set", function() {
    it("should set a value", function() {
      let mazeClone = mazeMap.set(2, 2, maze, mazeMap.VISITED);
      expect(mazeMap.get(2, 2, mazeClone)).to.equal(mazeMap.VISITED);
    });
  });


  describe("Maze.isVisited, Maze.markVisited", function() {
    var visited=[];
    it("marks and returns visited", function() {
      mazeMap.markVisited(1, 1, visited);
      expect(mazeMap.isVisited(0, 0, visited)).to.equal(false);
      expect(mazeMap.isVisited(1, 1, visited)).to.equal(true);
    });
  });

  describe("Maze.canMoveTo", function() {
    var visited=[];

    it("can not move to wall", function() {
      expect(mazeMap.canMoveTo(0, 0, maze)).to.equal(false);
    });

    it("can move to free", function() {
      expect(mazeMap.canMoveTo(1, 1, maze)).to.equal(true);
    });

    it("can move to exit", function() {
      expect(mazeMap.canMoveTo(2, 2, maze)).to.equal(true);
    });

    it("can not move to out of boud (negative)", function() {
      expect(mazeMap.canMoveTo(-1, -1, maze)).to.equal(false);
    });

    it("can not move to out of bound (positive)", function() {
      expect(mazeMap.canMoveTo(311, 287, maze)).to.equal(false);
      expect(mazeMap.canMoveTo(0, 287, maze)).to.equal(false);
      expect(mazeMap.canMoveTo(662, 0, maze)).to.equal(false);

    });


  });


});
