import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <h1 id="header-banner-text">うれて</h1>
      </div>
      {Array(4).fill(<Card />)}
    </div>
  );
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {Address: "Edinbrugh", Image: "https://imgur.com/a/UkaAz1f", Price: "£1000", Description: "loveley family home"}
    }
  }

  render() {
    return (
      <div className='card-container'>
        <h2 className='card-address'>{this.state.Address}</h2>
        <img className='card-image' src={this.state.Image} alt="alt"></img>
        <h4 className='card-price'>{this.state.Price}</h4>
        <p className='card-description'>{this.state.Description}</p>
      </div>
    )
  }
}
export default App;
