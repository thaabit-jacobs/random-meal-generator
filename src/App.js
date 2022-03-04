import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      meal: {}
    }
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <main>
        <h1 className="bold">Feeling Hungry</h1>
        <p className="bold">Get a random meal by clicking below!</p>
        <button>GET MEAL</button>
  
        <section className='meal-instructions'>
          <img/>
  
          <div className='meal-instructions-details'>
            <h2 className="mb-1">lorem lorem lorem lorem </h2>
            <p>lorem  lorem  lorem  lorem lorem  lorem </p>
          </div>
        </section>
  
        <section className='meal-meta-details'>
          <p className='bold'>Category</p>
          <p className='bold'>Area</p>
          <p className='mb-1 bold'>Tags</p>
  
          <h3>Ingredients: </h3>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </section>
      </main>
    );
  }
}




export default App;
