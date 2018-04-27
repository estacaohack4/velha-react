import React, {Component} from 'react';
import './Casa.css';

class Casa extends Component{
    
    render(){
        return (
            <div className="casa">
                {this.props.valor}
            </div>
        );
    }
}

export default Casa;