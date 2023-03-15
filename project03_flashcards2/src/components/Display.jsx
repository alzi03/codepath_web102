import React from "react";
import { useState } from "react"

import Flashcard from './Flashcard'
import arrow from '../assets/arrow3.png'

import './Display.css'



const Display = () => {

  const Flashcards = [
    <Flashcard question="Ready?" answer="Start!" />,
    <Flashcard question="Which 15-time NBA all-star has only made one three-pointer in his career?" answer="Shaquille O'Neal"/>,
    <Flashcard question="Who holds the NBA's all-time scoring record?" answer="Lebron James"/>,
    <Flashcard question="Which team in NBA history holds the most rings?" answer="Boston Celtics"/>,
    <Flashcard question="Which team won the very first NBA championship in 1950?" answer="Los Angeles Lakers"/>,
    <Flashcard question="What is Michael Jordan's middle name?" answer="Jeffery"/>,
    <Flashcard question="Who is the shortest player to win the dunk contest?" answer="Spud Webb"/>,
    <Flashcard question="What country is Luka Doncic from?" answer="Slovenia"/>,
    <Flashcard question="Who was the first pick of the 2022 NBA draft?" answer="Paolo Banchero"/>
  ]

  const [current, changeCurrent] = useState(0)
  const [card, changeFlashcard] = useState(Flashcards[current])
  const [text, changeText] = useState(card.props.question)

  const question = card.props.question
  const answer = card.props.answer 

  const cardClick = () => {
    if (text===question){
      changeText(answer)
    }
    else if (text===answer){
      changeText(question)
    }
  }
  
  const leftClick = () => {
    const newCard = current - 1

    if (newCard==-1){
      return
    }

    changeGuess('')
    changeClass("guessInput")
    

    changeText(Flashcards[newCard].props.question)
    changeFlashcard(Flashcards[newCard])
    changeCurrent(newCard)
  }

  const rightClick = () => {

    const newCard = current + 1

    if (newCard==Flashcards.length){
      return
    }

    changeGuess('')
    changeClass("guessInput")
    
    changeText(Flashcards[newCard].props.question)
    changeFlashcard(Flashcards[newCard])
    changeCurrent(newCard)
  }

  const [guessClass, changeClass] = useState("guessInput")

  const [guess, changeGuess] = useState('')
  const handleChange = (e) => {
    changeGuess(e.target.value)
  }

  const handleGuess = (e) => {
    e.preventDefault();
    if (guess == answer){
      changeClass("guessInput correct")
      const newStreak = streak + 1
      if (newStreak > longestStreak){
        changeLongestStreak(newStreak)
      }

      changeStreak(newStreak)

    }
    else{
      changeClass("guessInput wrong")
      changeStreak(0)
    }
  }

  // Stretch Features

  const [streak, changeStreak] = useState(0)
  const [longestStreak, changeLongestStreak] = useState(0)



  return(
    <div className="display">

      <div className="info">
        <h1>NBA Trivia</h1>
        <div>Do you know your NBA facts? Find out here!</div>
        <div>Number of cards: {Flashcards.length - 1}</div>
      </div>
      <div className="middle">
        <div className="streaks">
          <div>Current Streak: {streak}</div>
          <div>Longest Streak: {longestStreak}</div>
        </div>
        <div onClick={cardClick} className="flashcard">
          {text}
        </div>
      </div>
      <form className="guess" onSubmit={handleGuess}>
        <label>Guess here: </label>
        <input className={guessClass} name="guess" value={guess} placeholder="Guess..." onChange={handleChange}></input>
        <button className="submitButton" value="&#x2713"><span>&#10003;</span>
</button>
      </form>
      <div className="arrows">
        <div onClick={leftClick} className="arrowButton"><span>&#8592;</span></div>
        <div onClick={rightClick} className="arrowButton"><span>&#8594;</span></div>
      </div>
    </div>
  )
}

export default Display;