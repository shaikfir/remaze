import React from 'react';
import _ from 'lodash';

export default class Grid extends React.Component {

   getAppState() {
     var data = _.clone(this.props.initialData) || [];
     return {mazeData: data};
   };

  state = this.getAppState();

  render() {
    var cellClass;

    var cellStyle = {
        width: (100 / this.props.w)  + 'vw',
        height: (95 / this.props.h)+ 'vh'
    };

    var idx=0;
    return (
      <div className='container'>
      {this.state.mazeData.map(function(val, i){
          if(val==='X'){
            cellClass='cell blocked';
          } else if(val==='1'){
            cellClass='cell exit';
          }
          else if(val==='o'){
            cellClass='cell visited';
          } else {
            cellClass='cell';
          }
          return <div key={idx++} className={cellClass} style={cellStyle}>{idx}</div>;
      }, this)}
      </div>
    );
  }
};
