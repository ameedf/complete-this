import React, { Component } from 'react';
import StudentsContext from '../StudentsContext/StudentsContext';

class MinMax extends Component {
  static contextType = StudentsContext;

  getStudents() {
    return this.context.students
  }

  maximum() {
    const studentsList = this.getStudents();
    const grades = studentsList.map((s) => s.grade);
    const maxValue = Math.max(...grades);
    return maxValue;
  }

  minimum() {
    const studentsList = this.getStudents();
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