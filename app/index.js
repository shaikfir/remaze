import React from 'react';
import {render} from 'react-dom';

import mazes from './mazes';
import mazeMap from './mazeMap';
import Grid from './grid';
import {solve} from './solver';

var MAZE = mazes[1];

var mazeData = mazeMap.parseMaze(MAZE);
// var mazeData = mazeMap.parseMaze(maze1);
var grid = render(
  <Grid w={mazeData.w} h={mazeData.h} initialData={mazeData.data}/>,
  document.getElementById('root')
);

var actions = [];

function callBack(map, visited){
  let maze = _.clone(MAZE);
  _(visited).forEach(function(pos) {
    mazeMap.set(pos.x, pos.y, maze, 'o');
  });
  let newMap = mazeMap.parseMaze(maze);
  actions.push(newMap.data);
}

setInterval(function(){
  let nextState = actions.shift();
  if(nextState){
    grid.setState({mazeData: nextState});
    grid.render();
  }
}, 300)


solve(1, 1, MAZE, [], callBack);
