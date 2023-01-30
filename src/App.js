import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['paper', 'rock', 'scissors', 'lizard', 'spock'];

  const handleClick = (value) => {
    setUserChoice(value)
    getComputerChoice()
  }

  const getComputerChoice = () => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(compChoice);
  }

  useEffect (() => {
   {
    switch(userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
      case 'lizardspock':
      case 'spockscissors':
      case 'paperspock':
      case 'scissorslizard':
      case 'spockrock':
      case 'rocklizard':
      case 'lizardpaper':
          setResult('YOU WIN!')
          break
      case 'paperscissors':
      case 'paperlizard':
      case 'scissorsspock':
      case 'scissorsrock':
      case 'spocklizard':
      case 'spockpaper':
      case 'rockspock':
      case 'rockpaper':
      case 'lizardrock':
      case 'lizardscissors':
        setResult ('YOU LOSE!')
        break
      case 'paperpaper':
      case 'rockrock':
      case 'scissorsscissors':
      case 'spockspock':
      case 'lizardlizard':
       setResult ('DRAW!')
       break
    }
  }
  }, [computerChoice, userChoice])

 
  return (
    <div>
     <h1>User Choice is : {userChoice}</h1> 
     <h1>Computer Choice is : {computerChoice}</h1> 

     {choices.map((choice, index) => 
     <button key={index} onClick={() => handleClick(choice)}>{choice} </button>
     )}

     <h1>{result}</h1>
    </div>
  );
}

export default App
