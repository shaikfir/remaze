import React from 'react';
import {render} from 'react-dom';
import _ from 'lodash';

import mazes from './mazes';
import mazeMap from './mazeMap';
import Grid from './grid';
import {solve} from './itsolver';

const CONFIG = {
  MAZE: mazes[5],
  INTERVAL: 200
};

let mazeData = mazeMap.parseMaze(CONFIG.MAZE);
// var mazeData = mazeMap.parseMaze(maze1);
let grid = render(
  <Grid w={mazeData.w} h={mazeData.h} initialData={mazeData.data}/>,
  document.getElementById('root')
);

let actions = [];

function callBack(map, visited){
  let maze = _.clone(map);
  _(visited).forEach(function (pos) {
    mazeMap.set(pos.x, pos.y, maze, 'o');
  });
  let newMap = mazeMap.parseMaze(maze);
  actions.push(newMap.data);
}

setInterval(function (){
  let nextState = actions.shift();
  if(nextState){
    grid.setState({mazeData: nextState});
    grid.render();
  }
}, CONFIG.INTERVAL);


solve(1, 1, CONFIG.MAZE, [], callBack);
