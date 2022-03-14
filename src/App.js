import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      meal: {}
    }

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  fetchRandomMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then((data) => {
      console.log(data["meals"][0]);

      this.setState({
        meal: data["meals"][0]
      })
    })
  }

  componentDidMount() {
    this.fetchRandomMeal()
  }

  handleOnClick() {
    this.fetchRandomMeal()
  }

  getAllIngredients(){
    return Object.keys(this.state.meal)
                 .filter(objKey => objKey.indexOf("strIngredient") !== -1 && this.state.meal[objKey] !== "")
                 .map(filteredKeys => this.state.meal[filteredKeys])
  }

  render() {
    return (
      <main>
        <h1 className="bold">Feeling Hungry</h1>
        <p className="bold">Get a random meal by clicking below!</p>
        <button onClick={this.handleOnClick}>GET MEAL</button>
  
        <section className='meal-instructions'>
          <img src={this.state.meal["strMealThumb"]}/>
  
          <div className='meal-instructions-details'>
            <h2 className="mb-1">{this.state.meal["strMeal"]} </h2>
            <p>{this.state.meal["strInstructions"]}</p>
          </div>
        </section>
  
        <section className='meal-meta-details mb-1'>
          <p className='bold'>Category: {this.state.meal["strCategory"]}</p>
          <p className='bold'>Area: {this.state.meal["strArea"]}</p>
          <p className='mb-1 bold'>Tags: {this.state.meal["strTags"]}</p>
  
          <h3>Ingredients: </h3>
          <ul>
            {
              this.getAllIngredients().map(ingredient => <li key={ingredient}>{ingredient}</li>)
            }
          </ul>
        </section>
      </main>
    );
  }
}




export default App;
