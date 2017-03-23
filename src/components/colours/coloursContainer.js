import React, { Component } from 'react';
import ColourButton from './colourButton'
import colourConverter from '../data/coloursConverter';
import {togglePower} from '../../services/lifxAPI'
import { Button } from 'react-bootstrap';


class ColoursContainer extends Component {
  constructor() {
    super()
    this.state = {
      colourMode: false,
    }
  }

  startColours = () => {
    this.setState({colourMode: true})
    togglePower()
  }

  stopColours = () => {
    this.setState({colourMode: false})
    togglePower()
  }

  handleColourButton = () => {
    this.state.colourMode ? this.stopColours() : this.startColours()
  }

  render = () => {
    colourConverter(this.props.data)

    let colourButtonText = this.state.colourMode ? "Off" : "On"
    let colourButtonClass =  this.state.colourMode ? "danger" : "success"

    return (
      <div>
        <Button bsStyle={colourButtonClass} bsSize="large" block  onClick={this.handleColourButton} active={this.state.colourMode}>Colour Mode {colourButtonText}</Button>
      </div>
    )
  }
}

export default ColoursContainer
