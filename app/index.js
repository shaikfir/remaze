import React from 'react';
import {render} from 'react-dom';

import mazes from './mazes';
import mazeMap from './mazeMap';
import Grid from './grid';

var mazeData = mazeMap.parseMaze(mazes.maze1);
// var mazeData = mazeMap.parseMaze(maze1);
var grid = render(
  <Grid w={mazeData.w} h={mazeData.h} initialData={mazeData.data}/>,
  document.getElementById('root')
);
