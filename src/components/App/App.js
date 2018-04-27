import React, { Component } from 'react';
import './App.css';
import Casa from '../Casa/Casa';

class App extends Component {
  componentWillMount(){
    this.casas = ['O', 'X', 'X', 'O', ' ', ' ', 'X', ' ', 'O'];
  }

  handleClick = (event) => {
    console.log('k '+ event);
  }

  render() {
    let tabuleiro = [];
    let i = 0;
    for(let valorDaCasa of this.casas){
      i++;
      tabuleiro.push(<Casa valor={valorDaCasa} onClick={this.handleClick} key={i}/>)
    }

    return (
      <div className="App">
        {tabuleiro}
      </div>
    );
  }
}

export default App;
