import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page2 from '../Page2/Page2';

const Content = (props) => {
  return (
    <div style={{width: '100%'}}>
      <table style={{width: '100%'}}>
        <tbody>
          <tr>
            <td>
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/page1" exact component={Page1} />
                <Route path="/page2/:number" exact component={Page2} />
              </Switch>
            </td>
            <td>Statistics</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Welcome = (props) => {
  console.log("Welcome props:", props);
  return (
    <div>Welcome home !</div>
  );
}

const Page1 = (props) => {
  console.log("Page 1 props:", props);
  return (
    <div>Page 1</div>
  );
}


export default Content;