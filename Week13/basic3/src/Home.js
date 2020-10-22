import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router-dom";
import "./Home.css";

class Home extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(dog_name) {
        this.props.history.push(`/dogs/${dog_name}`);
    }
    render() {
        return (
            <div className="home">
                {this.props.dog.map(d => 
                    <div className="dog" onClick={() => this.handleClick(d.name)} key={uuidv4()}>
                        <img src={d.img} alt={`dog_${d.name}`}/>
                        <h1>{d.name}</h1>
                    </div>    
                )}
            </div>
        )
    }
}

export default withRouter(Home);