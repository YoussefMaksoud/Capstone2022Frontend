import React, { Component } from "react";
import './Dropdown.css';

class Dropdown extends Component{

    constructor(){
        super();

        this.state = {
            menuShow: false,
        }

        this.toggleList = this.toggleList.bind(this);
    }

    toggleList = () => {
        this.setState(prevState => ({
            menuShow: !prevState.menuShow
        }))
    }

    render(){

        const question = "";
        const answer = "";

        return(
            <div id = "dropdown-cont">
                <button id = "dropdown-btn" onClick = {this.toggleList}>
                    {this.props.question}
                </button>

                {
                    this.state.menuShow
                        ? (
                            <div id = "answer">
                                <p>{this.props.answer}</p>
                            </div>

                        )
                        : (
                            null
                        )
                }
            </div>
        )
    }
}

export default Dropdown;