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
        <Route path="/average" component={Average} />
        <Route path="/min-max" component={MinMax} />
      </Switch>
    </div>);
  }
}

export default Content;