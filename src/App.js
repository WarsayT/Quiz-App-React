/* eslint-disable eqeqeq */
import './App.css';
import { useState } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';

function App() {

  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState}}>
        {gameState == "menu" && <MainMenu /> }
        {gameState == "quiz" && <Quiz /> }
        {gameState == "endScreen" && <EndScreen /> }
        {gameState == "restart" && <MainMenu /> }
        {gameState == "reset" && <MainMenu /> }
      </QuizContext.Provider>
      

    </div>
  );
}

export default App;
