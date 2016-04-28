import mazeMap from '../app/mazeMap';
import _ from 'lodash';


export function solve(x, y, map, visited, callBack) {
  if (!mazeMap.isLegalMove(x, y, map, visited)){
    return false;
  }

  if (callBack) {
    callBack(map, visited);
  }

  if(mazeMap.get(x, y, map) === mazeMap.EXIT) {
    return true;
  }
  mazeMap.markVisited(x, y, visited);

  if (solve(x + 1, y, map, _.clone(visited), callBack)) {
    return true;
  }

  if (solve(x - 1, y, map, _.clone(visited), callBack)) {
    return true;
  }

  if (solve(x, y + 1, map, _.clone(visited), callBack)) {
    return true;
  }

  if (solve(x, y - 1, map, _.clone(visited), callBack)) {
    return true;
  }

  return false;
}
