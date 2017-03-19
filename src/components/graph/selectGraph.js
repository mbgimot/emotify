import React, { Component } from 'react';

class SelectGraph extends Component  {
  handleChange = (e) => {
  var graphType = e.target.value;
  this.props.onChange(graphType);
  }

  render(){
    return (
      <div>
        <select id="graphTypeSelect" onChange={this.handleChange}>
          <option value="radar">
            Radar
          </option>
          <option value="timeSeries">
            Time Series
          </option>
        </select>
      </div>
    );
  };
}

export default SelectGraph;