import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {name: 'Sushant', age:36},
      {name: 'Madhavi', age:34},
      {name: 'Shlok',  age:5}
    ]
  }

  switchNameHandler = () => {
    //console.log('Button was clicked')
    this.setState({
      persons : [
        {name: 'Sushant Kumar', age:36},
        {name: 'Madhavi Ojha', age:35},
        {name: 'Shlok Sushant',  age:5.5}
      ]
    })
  }

  render() {
     return (
       <div className="App">
         <h1>Hi I'm a React app</h1>
         <button onClick={this.switchNameHandler}>Switch name</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : Blog writing , Cricket analysis</Person>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       </div>
     );
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi , I \'m react app'))
  }
}

export default App;
