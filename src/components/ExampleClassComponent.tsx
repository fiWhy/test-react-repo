import React from 'react';
import { Item } from '../interfaces';

export default class ExampleClassComponent extends React.Component<{
  num: number;
}> {
  state = {
    increment: 0,
    value: '',
  };

  handleInc = () => {
    const { increment } = this.state;
    this.setState({
      increment: increment + 1,
    });
    console.log(this.state.increment);
  };

  render() {
    const { num } = this.props;
    const { increment } = this.state;
    return (
      <div onClick={this.handleInc}>
        Example {increment} {num}
      </div>
    );
  }
}
