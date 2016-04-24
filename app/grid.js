import React from 'react';
import _ from 'lodash';


var cssMap = {
  'X': 'cell blocked',
  '1': 'cell exit',
  'o': 'cell visited',
  'default': 'cell'
}
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
        cellClass = cssMap[val] || cssMap['default'];
        return <div key={idx++} className={cellClass} style={cellStyle}>{idx}</div>;
      }, this)}
      </div>
    );
  }
};
