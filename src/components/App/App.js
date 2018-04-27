import React, { Component } from 'react';
import './App.css';
import Casa from '../Casa/Casa';

class App extends Component {
  componentWillMount(){
    this.valorAtual = 'X';

    this.setState({
      casas: ['', '', '', '', '', '', '', '', '']
    });
  }

  clique = (posicao) => {
    let casas = this.state.casas;
    casas[posicao] = this.valorAtual;
    
    this.setState({casas: casas});

    if(this.valorAtual == 'X'){
      this.valorAtual = 'O';
    }else{
      this.valorAtual = 'X';
    }
  }

  render() {
    let tabuleiro = [];
    let i = 0;
    for(let valorDaCasa of this.state.casas){
      tabuleiro.push(<Casa cliqueDoPai={this.clique} valor={valorDaCasa} posicao={i} key={i}/>)
      i++;
    }

    return (
      <div className="App">
        {tabuleiro}
      </div>
    );
  }
}

export default App;
