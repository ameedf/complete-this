import React, { Component } from 'react';

class Average extends Component {
  calculateAverage() {
    let total = 0;
    const students = this.props.students;
    for (let index = 0; index < students.length; index++) {
      const student = students[index];
      total += student.grade;
    }
    return total / students.length;
  }

  render() {
    return (
      <div>
        <hr />
        <div>Students number: {this.props.students.length}</div>
        <div>Average: {this.calculateAverage()}</div>
      </div>
    );
  }
}

export default Average;