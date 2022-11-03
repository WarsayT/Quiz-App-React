/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { QuizContext } from '../Helpers/Context';

export const Questions = [
  {
    prompt: "What is 1 + 3?",
    optionA: "24",
    optionB: "23",
    optionC: '4',
    optionD: '3',
    answer: "C"
  },
  {
    prompt: "What is 1 + 4?",
    optionA: "24",
    optionB: "23",
    optionC: '4',
    optionD: '5',
    answer: "D"
  },
  {
    prompt: "What is 1 + 13?",
    optionA: "14",
    optionB: "23",
    optionC: '4',
    optionD: '3',
    answer: "A"
  },
  {
    prompt: "What is 10 + 3?",
    optionA: "24",
    optionB: "13",
    optionC: '4',
    optionD: '3',
    answer: "B"
  }
]

const Quiz = () => {
  const {gameState, setGameState} = useContext(QuizContext)
  const {score, setScore} = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  
  const nextQuestion = () => {
    if(Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  const finishQuiz = () => {
    if(Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }
    setGameState("endScreen")
  }

  return (
    <div className='Quiz'>
      <h1>{Questions[currentQuestion].prompt}</h1> 
      <div className="options">
        <button onClick={() => setOptionChosen("A")} className="options-btn">{Questions[currentQuestion].optionA}</button>
        <button onClick={() => setOptionChosen("B")} className="options-btn">{Questions[currentQuestion].optionB}</button>
        <button onClick={() => setOptionChosen("C")} className="options-btn">{Questions[currentQuestion].optionC}</button>
        <button onClick={() => setOptionChosen("D")} className="options-btn">{Questions[currentQuestion].optionD}</button>
      </div> 
      {currentQuestion == Questions.length - 1 ? (
        <button onClick={() => finishQuiz()} className='nxt-btn'>Finish Quiz</button>
      ) : (
        <button onClick={() => nextQuestion()} className='nxt-btn'>Next →</button>
      )}
    </div>
  )
}

export default Quiz