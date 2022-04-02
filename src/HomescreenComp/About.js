import React, { Component } from 'react'
import Navig from '../HomescreenComp/Navbar'
import Jeff from '../Assets/Jeff.png'
import Youssef from '../Assets/Youssef.png'
import Randy from '../Assets/Randy.png'
import Khaled from '../Assets/Khaled.png'
import Ryan from '../Assets/Ryan.jpg'
import sensor from '../Assets/sensor.png'
import palm from '../Assets/palm.png'
import gateway from '../Assets/gateway.png'
import schema from '../Assets/sens_schema.png'
import './About.css'
import Footer from '../HomescreenComp/footer'

class About extends Component{
    render(){
        return(
            <div>
                <div>
                    <Navig/>
                    <div id = "what-we-do">
                        <div className = "the-top">
                            <div>
                                <h1 className='about-us'>About Us</h1>
                                <p className = "mission">Health information without the clutter</p>
                                <p className = "background">pIRfusiX solutions is a health monitoring system that measures a patients blood oxygen levels using a custom sensor.
                                    This data is then transmitted using the custom gateway via cellular, satellite or wifi and visualized using our website.
                                    Our objective is to allow practitioners to prepare for oncoming patients from remote locations by 
                                    providing realtime data and trend predictions regarding the patients condition.
                                </p>
                            </div>
                        </div>
                        <div id = "design-images">
                            <div className = "design-card">
                                <img src = {sensor} className = "product"></img>
                                <p className = "position">Custom Sensor</p>
                            </div>
                            <div className = "design-card">
                                <img src = {gateway} className = "product"></img>
                                <p className = "position">Custom Gateway</p>
                            </div>
                        </div>
                    </div>
                    <div id = "whitespace"></div>
                    <h1 id = "team-header">Our Team</h1>
                    <div id = "team">    
                        <div className = "Profile">
                            <img src = {Jeff} className = "profile-pic"></img>
                            <h2 className = "name">Jeffrey Roszell</h2>
                            <p className = "position">Project Manager and Firmware Lead</p>
                            <p className = "contact-info">Jeff.Roszell@gmail.com</p>
                        </div>
                        
                        <div className = "Profile">
                            <img src = {Youssef} className = "profile-pic"></img>
                            <h2 className = "name">Youssef Maksoud</h2>
                            <p className = "position">Full Stack Developer</p>
                            <p className = "contact-info">youssef.abdelmaksoud@uclagary.ca</p>
                        </div>
                        
                        <div className = "Profile">
                            <img src = {Randy} className = "profile-pic"></img>
                            <h2 className = "name">Randy Moore</h2>
                            <p className = "position"> Sensor hardware Lead</p>
                            <p className = "contact-info">randywilliamjmoore@gmail.com</p>
                        </div>
                        
                        <div className = "Profile" >
                            <img src = {Khaled} className = "profile-pic"></img>
                            <h2 className = "name">Khaled Elmalawany</h2>
                            <p className = "position">Sensor, Firmware Developer</p>
                            <p className = "contact-info">elmalawanykhaled@gmail.com</p>
                        </div>
                        <div className = "Profile" >
                            <img src = {Ryan} className = "profile-pic"></img>
                            <h2 className = "name">Ryan Ward</h2>
                            <p className = "position">Gateway Lead</p>
                            <p className = "contact-info">mr.ryanpward@gmail.com</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;