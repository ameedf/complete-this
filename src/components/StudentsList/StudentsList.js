import React, { Component } from 'react';
import Student from '../Student/Student';
import StudentsContext from '../StudentsContext/StudentsContext';

class StudentsList extends Component {
  render() {
    return (
      <StudentsContext.Consumer>
        {value =>
          <div>
            {value.students.map(s => <Student data={s} />)}
          </div>
        }
      </StudentsContext.Consumer>
    );
  }
}

export default StudentsList;