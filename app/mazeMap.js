import _ from 'lodash';

function getPointStr(x,y) {
  return {x :x, y:y};
}

var MazeMap = {
  BLOCKED: 'X',
  FREE: ' ',
  EXIT: '1',

  get: function(x, y, map) {
    if (y<0 || x<0 || y >= map.length || x>=map[y].length){
      return this.BLOCKED;
    }
    return map[y].charAt(x);
  },

  canMoveTo: function(x, y, map){
    const v = this.get(x, y , map);
    return (v == this.FREE || v == this.EXIT);
  },

  markVisited: function(x, y, visited){
    visited.push(getPointStr(x,y));

  },

  isVisited: function(x, y, visited){
    return !!_.find(visited, getPointStr(x,y));
  },

  parseMaze: function(maze){
    var data = [];
    var h = maze.length;
    var w = maze[0].length;
    _(maze).forEach(function(value) {
      _(value).forEach(function(cell) {
        data.push(cell);
      });
    });

    return {
      h: h,
      w: w,
      data: data
    }
  }
}

export default MazeMap;
