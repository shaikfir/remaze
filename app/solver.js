import mazeMap from '../app/mazeMap';
import _ from 'lodash';


export function solve(x, y, map, visited, callBack) {
  if (callBack) {
    callBack(map, visited);
  }

  if(mazeMap.get(x, y, map) == mazeMap.EXIT) {
    return true;
  }
  mazeMap.markVisited(x, y, visited);

  if (!mazeMap.isVisited(x+1, y, visited) &&  mazeMap.canMoveTo(x+1, y, map)) {
    if (solve(x+1, y, map, _.clone(visited), callBack)) {
      return true;
    }
  }

  if (!mazeMap.isVisited(x-1, y, visited) &&  mazeMap.canMoveTo(x-1, y, map)) {
    if (solve(x-1, y, map, _.clone(visited), callBack)) {
      return true;
    }
  }

  if (!mazeMap.isVisited(x, y+1, visited) &&  mazeMap.canMoveTo(x, y+1, map)) {
    if (solve(x, y+1, map, _.clone(visited), callBack)) {
      return true;
    }
  }

  if (!mazeMap.isVisited(x, y-1, visited) &&  mazeMap.canMoveTo(x, y-1, map)) {
    if (solve(x, y-1, map, _.clone(visited), callBack)) {
      return true;
    }
  }

  return false;
};
