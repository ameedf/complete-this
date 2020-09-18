import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Average from '../Average/Average';
import MinMax from '../MinMax/MinMax';
import StudentsList from '../StudentsList/StudentsList';

class Content extends Component {
  render() {
    return (<div>
      <Switch>
        <Route path="/students-list" component={StudentsList} />
      </Switch>

      <StudentsList allStudents={this.props.students} />
      <Average students={this.props.students} />
      <MinMax students={this.props.students} />
    </div>);
  }
}

export default Content;