import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../Content/Content';
import Header from '../Header/Header';


class MainPage extends Component {

  render() {
    return (
      <Router>
        <div style={{width: '100%'}} >
          <Header />
          <Content />
        </div>
      </Router>
    );
  }
}

export default MainPage;