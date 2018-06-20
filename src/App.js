import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
{/*  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Yemma nuvvu cheyagalava?")); */}
class App extends Component {
  state = {
    persons: [
    { name: "Harsha", age: "24"},
    { name: "vardhan", age: "25"},
    { name: "reddy", age: "26"}    ],
    otherState: 'this will not be changed',
    showPersons: false
  }

  switchNamesHandler = (myName) => {
    console.log("hi this is clicked");
    this.setState({
      persons: [
    { name: myName, age: "2344"},
    { name: "blue", age: "2444"},
    { name: "green", age: "24442"}    ]
    })
  }

  nameChangedHandler = (event) => {
    console.log('inside name chanding');
    this.setState({
      persons: [
      { name: "Harsha", age: "35"},
      { name: event.target.value, age: "34"},
      { name: "reddy", age: "37"}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/> 
          {/* secondway of passing arg */}
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age }
            change={this.nameChangedHandler}
            click={this.switchNamesHandler.bind(this, "superhero")}> My hobbies are dash dash dash </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
          </div>
      );
    }
    return (
      <div className="App">
         <h1>Hi i am Harsha </h1>
         <p>I am learning react </p>
         {/* first way of passing arg on click */}
         <button 
         style={style}
         onClick={ this.togglePersonsHandler}>Toggle Persons</button>  
         {persons}
       </div>
    );
  }
}

export default App;

