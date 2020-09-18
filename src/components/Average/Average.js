import React, { Component } from 'react';
import StudentsContext from '../StudentsContext/StudentsContext';

class Average extends Component {
  static contextType = StudentsContext;

  getStudents() {
    return this.context.students;
  }

  calculateAverage() {
    let total = 0;
    const students = this.getStudents();
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
        <div>Students number: {this.getStudents().length}</div>
        <div>Average: {this.calculateAverage()}</div>
      </div>
    );
  }
}

export default Average;