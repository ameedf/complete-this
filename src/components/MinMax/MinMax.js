import React, { Component } from 'react';

class MinMax extends Component {
  constructor(props) {
    super(props)
  }

  maximum() {
    const studentsList = this.props.students;
    const grades = studentsList.map((s) => s.grade);
    const maxValue = Math.max(...grades);
    return maxValue;
  }

  minimum() {
    const studentsList = this.props.students;
    const grades = studentsList.map((s) => s.grade);
    const minValue = Math.min(...grades)
    return minValue;
  }
  render() {
    return (
      <div>
        <div>Highest grade: {this.maximum()}</div>
        <div>Lowest grade: {this.minimum()}</div>
      </div>
    );
  }
}

export default MinMax;