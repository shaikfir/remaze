import React from 'react';
import _ from 'lodash';


let cssMap = {
  'X': 'cell blocked',
  '1': 'cell exit',
  'o': 'cell visited',
  'default': 'cell'
};

export default class Grid extends React.Component {

   getAppState() {
     let data = _.clone(this.props.initialData) || [];
     return {mazeData: data};
   };

  state = this.getAppState();

  render() {
    let cellClass;

    let cellStyle = {
        width: (100 / this.props.w) + 'vw',
        height: (95 / this.props.h) + 'vh'
    };

    let idx = 0;
    return (
      <div className='container'>
      {this.state.mazeData.map(function (val){
        cellClass = cssMap[val] || cssMap.default;
        return <div key={idx++} className={cellClass} style={cellStyle}>{idx}</div>;
      }, this)}
      </div>
    );
  }
}
