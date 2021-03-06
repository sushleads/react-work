import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from  'radium';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons : [
        {id: 'idx1', name: 'Sushant', age:36},
        {id: 'idx2', name: 'Madhavi', age:34},
        {id: 'idx3', name: 'Shlok',  age:5}
      ],
      otherDetails : [
        {state: 'Jharkhand', country: 'India'},
        {state: 'London', country: 'UK'}
      ]
    }

    deleteNameHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }

    nameChangedHandler = (event, id) => {
      const personIdx = this.state.persons.findIndex( p=> {
        return p.id === id;
      });
      const person = { 
        ...this.state.persons[personIdx]
      };
      
      person.name = event.target.value;
      
      const persons = [...this.state.persons];
      persons[personIdx] = person;
      this.setState({ persons : persons})
    }

    toggerNameHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
    }

    render(){
      const style = {
           backgroundColor : 'green',
           color : 'white',
           font: 'inherit',
           border: '1 px solid blue',
           padding: '8px',
           ':hover':{
             backgroundColor:'lightgreen',
             color:'black'
           }
        }

      let persons = null;

      if ( this.state.showPersons ) {
        persons = (
            <div>
              {
                this.state.persons.map((person, index) => {
                  return <Person 
                  click={() => this.deleteNameHandler(index)} 
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id )}/>
                  }
                )
              }
            </div>
        )
        style.backgroundColor = 'red'
        style[':hover'] = {
          backgroundColor:'salmon',
          color:'black'
        }

      }

      const classes = [];

      if(this.state.persons.length <=2)
      {
        classes.push('red');
      }

      if(this.state.persons.length <= 1)
      {
        classes.push('bold');
      }

      return (
        <StyleRoot>
        <div className="App">
         <h1>Hi I'm a React app</h1>
         <p className={classes.join('  ')}>This is really working</p>
         <button style={style} onClick={this.toggerNameHandler}>Toggle names</button>
         {persons}
        </div>
        </StyleRoot>
     )
    }
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi , I \'m react app'))
}

export default Radium(App);