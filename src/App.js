import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Average from './components/Average/Average';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu';
import MinMax from './components/MinMax/MinMax';
import StudentsList from './components/StudentsList/StudentsList';

class App extends React.Component {
  state = {
    students: [
      { id: 1, name: "Chen", grade: 90 },
      { id: 2, name: "Kathy", grade: 80 },
      { id: 3, name: "Nofar", grade: 79 },
    ]
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Menu />

          <Content students= {this.state.students}/>
          
        </Router>
      </div>
    );
  }
}

export default App;
