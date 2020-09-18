import React from 'react';

const Student = (props) => {
  const student = props.data;
  return (
    <div>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>grade</td>
          </tr>
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.grade}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;