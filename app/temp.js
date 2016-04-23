

<Grid w={mazeData.w} h={mazeData.h} initialData={mazeData.data}/>


var mazeData = parseMaze(maze7);
var grid = ReactDOM.render(
  <Grid w={mazeData.w} h={mazeData.h} initialData={mazeData.data}/>,
  document.getElementById('content')
);


var actions =[21, 22, 23, 24, 25, 26, 27, 47, 67, 66, 65, 85, 105];
var data = mazeData.data;
setInterval(function(){
  var pos = actions.shift();
  if(pos){
    console.log(pos);
    data[pos] = 'o';
    grid.setState({mazeData: _.clone(data)});
    grid.render();
  }
}, 300)
