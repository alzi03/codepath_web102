import React from "react";
import { useState } from "react"
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json"

export default function BaristaForm(){
  
  const [inputs, setInputs] = useState({
    'temperature': '',
    'syrup': '',
    'milk': '',
    'blended': ''
  });

  const [drink, setCurrentDrink] = useState('')
  const [recipe, setRecipe] = useState({})

  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');

  const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
  
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
  
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
  
    'blended': ['yes', 'turbo', 'no']
  }

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  }

  const onCheckAnswer = () => {
    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');

    if (recipe.temp != inputs['temperature']){
      setCheckedTemperature('wrong');
    }
    else {
      setCheckedTemperature("correct");
    }

    if (recipe.syrup != inputs['syrup']){
      setCheckedSyrup('wrong');
    }
    else {
      setCheckedSyrup("correct");
    }

    if (recipe.milk != inputs['milk']){
      setCheckedMilk('wrong');
    }
    else {
      setCheckedMilk("correct");
    }

    if (recipe.blended != inputs['blended']){
      setCheckedBlended('wrong');
    }
    else {
      setCheckedBlended("correct");
    }

    console.log(correct_temp)
    console.log(correct_blended)
    console.log(correct_milk)
    console.log(correct_syrup)


  }
  
  const onNewDrink = () => {
    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');

    setInputs({
      'temperature': '',
      'syrup': '',
      'milk': '',
      'blended': ''
    });


    getNextDrink();
    console.log(recipe)
    console.log(inputs)
  }

  return(
    <div>
      <h2>Hi, I'd like to order a {drink} </h2>
      <form className="container">

      </form>
      <div className="forms">
      <div className="mini-container">
        <h3>Temperature</h3>
        <div className="answer-space" id={correct_temp}>
          {inputs.temperature}
        </div>
        <RecipeChoices 
          handleChange={(e) => setInputs(prevState=>({
            ...prevState, [e.target.name]: e.target.value
          }))}
          label="temperature"
          choices={ingredients.temperature}
          checked={inputs.temperature}
        />
      </div>

      <div className="mini-container">
        <h3>Syrup</h3>
        <div className="answer-space" id={correct_syrup}>
          {inputs.syrup}
        </div>
        <RecipeChoices 
          handleChange={(e) => setInputs(prevState=>({
            ...prevState, [e.target.name]: e.target.value
          }))}
          label="syrup"
          choices={ingredients.syrup}
          checked={inputs.syrup}
        />
      </div>
      
      <div className="mini-container">
        <h3>Milk</h3>
        <div className="answer-space" id={correct_milk}>
          {inputs.milk}
        </div>
        <RecipeChoices 
          handleChange={(e) => setInputs(prevState=>({
            ...prevState, [e.target.name]: e.target.value
          }))}
          label="milk"
          choices={ingredients.milk}
          checked={inputs.milk}
        />  
      </div>

      <div className="mini-container">
        <h3>Blended</h3>
        <div className="answer-space" id={correct_blended}>
          {inputs.blended}
        </div>
        <RecipeChoices 
          handleChange={(e) => setInputs(prevState=>({
            ...prevState, [e.target.name]: e.target.value
          }))}
          label="blended"
          choices={ingredients.blended}
          checked={inputs.blended}
        />
      </div>
      </div>





      <button type="submit" className="buttonSubmit" onClick={onCheckAnswer}>
        Check Answer
      </button>

      <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        New Drink
      </button>

    </div>
  )
}