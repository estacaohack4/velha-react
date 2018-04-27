import React, {Component} from 'react';
import './Casa.css';

class Casa extends Component{

    aoClicar = () => {
        if(this.props.valor != ''){
            return;
        }

        this.props.cliqueDoPai(this.props.posicao);
    }
    
    render(){
        return (
            <div className="casa" onClick={this.aoClicar}>
                <p>{this.props.valor}</p>
            </div>
        );
    }
}

export default Casa;