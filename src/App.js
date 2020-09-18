import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Average from './components/Average/Average';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu';
import MinMax from './components/MinMax/MinMax';
import StudentsContext from './components/StudentsContext/StudentsContext';
import StudentsList from './components/StudentsList/StudentsList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StudentsContext.Provider value={
          {
            students: [
              { id: 1, name: "Chen", grade: 90 },
              { id: 2, name: "Kathy", grade: 80 },
              { id: 3, name: "Nofar", grade: 79 },
            ]
          }
        } >
          <Router>
            <Menu />
            <Content />
          </Router>
        </StudentsContext.Provider>
      </div>
    );
  }
}

export default App;
