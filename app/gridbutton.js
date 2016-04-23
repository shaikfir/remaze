import React from 'react';

export default class GridButton extends React.Component {
  render() {
    return (
      <div className='gridButton'>{this.props.label}</div>
    );
  }
};
