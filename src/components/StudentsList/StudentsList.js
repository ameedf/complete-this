import React, { Component } from 'react';
import Average from '../Average/Average';
import Student from '../Student/Student';

class StudentsList extends Component {
  
  render() {
    return (
      <div>
        {this.props.allStudents.map(
          s => <Student data={s} />
        )}
      </div>
    );
  }
}



export default StudentsList;