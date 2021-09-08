import React, { Component } from 'react';
import Display from '../components/Display';

export default class RandomColor extends Component {
  state = {
    color: 'red'
  }    

  doRandomColor = () => {
    const colors = ['red', 'blue', 'yellow', 'gray', 'purple', 'gold'];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    this.setState({ color: colors[randomColorIndex] });
  }

  componentDidMount() {
    setInterval(() => this.doRandomColor(), 1000);
  }

  render() {

    return (
      <Display color={this.state.color} />
    );
  }
}
