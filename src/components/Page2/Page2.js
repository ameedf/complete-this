import React, { Component } from 'react';

class Page2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Page 2.. Number: {this.props.match.params.number}
      </div>
    );
  }
}

export default Page2;