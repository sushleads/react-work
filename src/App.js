import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons : [
        {name: 'Sushant', age:36},
        {name: 'Madhavi', age:34},
        {name: 'Shlok',  age:5}
      ],
      otherDetails : [
        {state: 'Jharkhand', country: 'India'},
        {state: 'London', country: 'UK'}
      ]
    }

    switchNameHandler = (newName) => {
      //console.log('Button was clicked')
      this.setState({
        persons : [
          {name: newName, age:36},
          {name: 'Madhavi Ojha', age:35},
          {name: 'Shlok Sushant',  age:5.5}
        ],
        otherDetails : this.state.otherDetails
      })
    }

    nameChangedHandler = (event) => {
      this.setState({
        persons : [
          {name: 'SK', age:36},
          {name: event.target.value, age:35},
          {name: 'Shlok Sushant',  age:5.5}
        ]
      })
    }

    render(){
        const style = {
           backgroundColor : 'white',
           font: 'inherit',
           border: '1 px solid blue',
           padding: '8px'
        }
    
  return (
       <div className="App">
         <h1>Hi I'm a React app</h1>
         <button style={style} onClick={() => this.switchNameHandler('Sushant Kumar')}>Switch name</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : Blog writing , Cricket analysis</Person>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
         click={this.switchNameHandler.bind(this, 'SK')}
         changed={this.nameChangedHandler} />
         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
         <h1>{this.state.otherDetails[0].country}</h1>
       </div>
     )
    }

    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi , I \'m react app'))
}

export default App;