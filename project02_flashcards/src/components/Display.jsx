import React from "react";

import Flashcard from './Flashcard'
import arrow from '../assets/arrow.png'

import './Display.css'



const Display = () => {
  
  const ok = () => {
    console.log()
  }

  const Flashcards = [
    <Flashcard question="Which 15-time NBA all-star has only made one three-pointer in his career?" answer="Shaquille O'Neal" color="lightblue"/>,
    <Flashcard question="Who holds the NBA's all-time scoring record?" answer="Lebron James"/>,
    <Flashcard question="Which team in NBA history holds the most rings?" answer="Boston Celtics"/>,
    <Flashcard question="Which team won the very first NBA championship in 1950?" answer="Los Angeles Lakers"/>,
    <Flashcard question="What is Michael Jordan's middle name?" answer="Jeffery"/>,
    <Flashcard question="Who is the shortest player to win the dunk contest?" answer="Spud Webb"/>,
    <Flashcard question="What country is Luka Doncic from?" answer="Slovenia"/>,
    <Flashcard question="Who was the first pick of the 2022 NBA draft?" answer="Paolo Banchero"/>
  ]

  const [card, changeFlashcard] = React.useState(Flashcards[Math.floor(Math.random()*Flashcards.length)])
  const [text, changeText] = React.useState(card.props.question)

  console.log(card.props.question)
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
  const arrowClick = () => {
    
    const newCard = Flashcards[Math.floor(Math.random()*Flashcards.length)]
    
    changeText(newCard.props.question)
    changeFlashcard(newCard)
  }


  return(
    <div className="display">

      <div className="info">
        <h3>NBA Trivia</h3>
        <h6>Do you know your NBA facts? Find out here!</h6>
        <h6>Number of cards: {Flashcards.length}</h6>
      </div>

      <div onClick={cardClick} className="flashcard">
        {text}
      </div>

      <button onClick={arrowClick} className="arrowButton"><img src={arrow} width="40px"/></button>

    </div>
  )
}

export default Display;