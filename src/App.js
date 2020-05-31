import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [ personState, setPersonState ] = useState({
      persons : [
        {name: 'Sushant', age:36},
        {name: 'Madhavi', age:34},
        {name: 'Shlok',  age:5}
      ],
      otherDetails : [
        {state: 'Jharkhand', country: 'India'},
        {state: 'London', country: 'UK'}
      ]
    });

    const switchNameHandler = () => {
      //console.log('Button was clicked')
      setPersonState({
        persons : [
          {name: 'Sushant Kumar', age:36},
          {name: 'Madhavi Ojha', age:35},
          {name: 'Shlok Sushant',  age:5.5}
        ],
        otherDetails : personState.otherDetails
      })
    }
    
    return (
       <div className="App">
         <h1>Hi I'm a React app</h1>
         <button onClick={switchNameHandler}>Switch name</button>
         <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies : Blog writing , Cricket analysis</Person>
         <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
         <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
         <h1>{personState.otherDetails[0].country}</h1>
       </div>
     );
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi , I \'m react app'))
}

export default App;