import _ from 'lodash';


function replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index + character.length);
}

let MazeMap = {
  BLOCKED: 'X',
  FREE: ' ',
  EXIT: '1',
  VISITED: 'o',
  DEAD: '+',
  WIN: '*',

  getPointObj: function (x, y) {
    return {x: x, y: y};
  },

  get: function (x, y, map) {
    if (y < 0 || x < 0 || y >= map.length || x >= map[y].length){
      return this.BLOCKED;
    }
    return map[y].charAt(x);
  },

  set: function (x, y, map, val){
    if (y < 0 || x < 0 || y >= map.length || x >= map[y].length){
      return undefined;
    }
    map[y] = replaceAt(map[y], x, val);
  },

  canMoveTo: function (x, y, map){
    const v = this.get(x, y, map);
    return (v === this.FREE || v === this.EXIT);
  },

  markVisited: function (x, y, visited){
    visited.push(this.getPointObj(x, y));
  },

  isVisited: function (x, y, visited){
    return !!_.find(visited, this.getPointObj(x, y));
  },

  removeFromVisited: function (x, y, visited){
    let ind = _.findIndex(visited, this.getPointObj(x, y));
    if(ind >= 0) {
      visited.splice(ind, 1);
    }
    return visited;
  },

  isLegalMove(x, y, map, visited){
      return this.canMoveTo(x, y, map) && !this.isVisited(x, y, visited);
  },

  parseMaze: function (maze){
    let data = [];
    let h = maze.length;
    let w = maze[0].length;
    _(maze).forEach(function (value) {
      _(value).forEach(function (cell) {
        data.push(cell);
      });
    });

    return {
      h: h,
      w: w,
      data: data
    };
  }
};

export default MazeMap;
