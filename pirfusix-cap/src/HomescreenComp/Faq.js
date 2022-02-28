import React, {Component} from 'react';
import './Faq.css'
import Navig from './Navbar'
import Dropdown from './Dropdown';
import Footer from './footer';
import {questions} from "./QandA.js"

class Faq extends Component{
    render(){
        return(
            <div>
                <Navig/>
                <header className = "faq-header">FAQs</header>
                 <div id = "question-list">
                     <ul>
                         {questions.map((item, index) => {
                             return <Dropdown question = {item.question} answer = {item.answer}></Dropdown>
                         })}
                     </ul>                    
                 </div>
                 <Footer/>
            </div>
        )
    }
}

export default Faq;