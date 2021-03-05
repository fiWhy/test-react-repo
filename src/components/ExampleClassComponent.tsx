import React from 'react';

type ExampleProps = {
  num: number;
};

type ExampleState = {
  increment: number;
  value: string;
};
export default class ExampleClassComponent extends React.Component<
  ExampleProps,
  ExampleState
> {
  state = {
    increment: 0,
    value: '',
  };

  componentDidMount() {
    console.log('IM READY!');
  }

  componentWillUnmount() {
    console.log('Unmounting...');
  }

  componentDidUpdate() {}

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
