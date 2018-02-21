import * as React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import TryForm from './components/TryForm' 

// We'll create this in Step 5.
// We'll create this in Step 6.


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center jumbotron">
          <h1> Welcome To React Redux Form App</h1> 
          <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
          responsive, mobile-first projects on the web.</p> 
        </div>
       <TryForm />
      </div>
     
    );
  }
}

export default App;





