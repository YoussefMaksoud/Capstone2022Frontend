import React, { Component } from 'react'
import Navig from '../HomescreenComp/Navbar'
import Jeff from '../Assets/Jeff.png'
import Youssef from '../Assets/Youssef.png'
import Randy from '../Assets/Randy.png'
import Khaled from '../Assets/Khaled.png'
import './About.css'
import Footer from '../HomescreenComp/footer'

class About extends Component{
    render(){
        return(
            <div>
                <div>
                    <Navig/>
                    <h1 className = "name">Jeffrey Roszell - Project Manager and Firmware Lead</h1>
                    <div className = "Profile">
                        <img src = {Jeff} className = "profile-pic"></img>
                        <p className = "biography">Born in Saskatoon, Jeff Roszell is a prairie person through and through. A childhood of  hockey and camping led to an
                        outdoorsy team player. Inevitably, Jeff chose to join the  military shortly after enjoying all his small-town high school's science. He spent four
                        years  working as an Armored Crewman before eventually stumbling upon his passion for  medicine. As soon as he was able, he committed to being a 
                        Medical Technician. Out of the many years that Jeff spent as a Medical Technician in the Canadian Forces, he  gained a keen interest in helping the
                        sick and injured military members. This led naturally  to the motivation to put his military career on pause to seek out further education and  
                        training so that he may put that effort to greater use. In his last year of Software and  Biomedical Engineering at the University of Calgary, 
                        he studied, practiced, and created many  ideas in the vein of medical engineering. Jeff's main interests involve using machine learning and artificial
                        intelligence to collect and  analyze various medical data platforms. During his last year, he embarked on a capstone  project involving tissue perfusion 
                        data and its use for detecting systemic shock. Additionally,  he has endeavored in an undergraduate thesis, which improves the robustness of machine  
                        learning models involving CT (Computerized Tomography) and MRI (Magnetic Resonance  Imaging) images. With intellectual abilities in data handling, 
                        clustering, model architecture, preprocessing,  and clinical application knowledge, Jeff hopes to work towards a job in medical image  processing 
                        or machine learning applications in medical programs. 
                        </p>
                    </div>
                    <h1 className = "name">Youssef Maksoud - Full Stack Developer</h1>
                    <div className = "Profile">
                        <img src = {Youssef} className = "profile-pic"></img>
                        <p className = "biography">Youssef was born in Cairo, Egypt where he lived for two years before moving to Calgary in  2002. His career as a competitive
                        swimmer started at 4 years old. Throughout school, and  first year of university, Youssef continued his career and retired at the age of 18 after having
                        qualified, participated and placed at national level competitions. Youssef was also a world  trials qualifier in 2018. After the end of his career, 
                        Youssef chose to pursue software/  biomedical engineering at the U of C, while bodybuilding competitively. Youssef focuses on software engineering and its
                        endless bank of knowledge and expertise.  Throughout university, Youssef has had experience designing, coding, and testing software  systems as well as database
                        management systems. In the future, he aims to be employed as  a full stack developer (focuses on implementation of software systems). In this last year, Youssef
                        has begun work on his capstone project (graduation project) where  he focuses on designing, implementing, and testing a software-based system that receives,  
                        processes, and visualizes incoming tissue perfusion (oxidation levels) data from a remote  incoming trauma patient. During the same summer, Youssef worked as a 
                        freelance software  engineer where he enjoyed aiding other students in understanding and writing code. In his  own time, he will be learning the necessary technical 
                        skills to implement the capstone, as  well as gaining applicable skills for the software industry. 
                        </p>
                    </div>
                    <h1 className = "name">Randy Moore - Sensor hardware Lead</h1>
                    <div className = "Profile">
                        <img src = {Randy} className = "profile-pic"></img>
                        <p className = "biography">Randy is from Chestermere, Alberta. It was an interest in the aerospace industry that caused  Randy to enroll in engineering.
                        However, through a research position with Calgary iGEM,  Randy became interested in the intersection of engineering and medicine. His technical  interests
                        lay in low-level design, including embedded systems programming, electronic  design, and robotic systems. In the future, Randy aims to pursue higher 
                        education, eventually  working in the medical technology industry where he aims to combine his passion for space  technologies and biomedical engineering. 
                        </p>
                    </div>
                    <h1 className = "name">Khaled Elmalawany - Sensor, Firmware Developer</h1>
                    <div className = "Profile" >
                        <img src = {Khaled} className = "profile-pic"></img>
                        <p className = "biography">Khaled first landed in Canada when he was 3 years old in Montreal, Quebec from Alexandria,  Egypt. He came to Calgary in May 
                        2010 where he pursued Junior High and High School in Alberta. Through his involvement in the Brain Bee Competition and First Robotics in high  school, 
                        Khaled has developed a keen interest in Robotics in the medical field. Throughout his university experience, Khaled incorporated his own national company
                        in  2016, known as Tutoring Education Centre, of which he was able to assist more than 200  students to reach their academic potential. Some of these 
                        students went forward to become  Engineering students and medical students at the University of Calgary, the University of  Alberta, the University of Waterloo,
                        the University of Toronto, and the University of British  Columbia. He also incorporated his own Canadian non-profit organization in 2021 by the 
                        name of Egyptian Youth Club that aims to bring Egyptians together through social activities  and community service. Furthermore, Khaled has successfully 
                        run in 2 Students’ Union  elections of which he has been elected as the Schulich School of Engineering Representative. In the technical field, Khaled has been 
                        involved in 5 different research positions as well as  various industrial projects throughout the past 3 years of his undergraduate degree. He  initiated RISE for 
                        Health and Wellness, a Cumming School of Medicine initiative dedicated to  making high school immigrant youth leaders in health, and developed the laboratory  material 
                        for the Instrumentation, Sensors and Interfacing (ENEL 301) course at the Schulich  School of Engineering. Khaled also developed an add-on software for
                        AutoCAD for Graham  Construction, and he is the external tester for Arduino products of which he recently  completed the analysis of the Arduino 
                        Engineering Kit Rev. 2. His current research involves  developing an innovative sensor for urinary tract infections (UTI) for quick and  inexpensive analysis. 
                        </p>
                    </div>
                    {/*
                    <div className = "Profile">
                        <img className = "profile-pic"></img>
                        <p className = "role-title">Gateway Lead</p>
                    </div>
                    */}

                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;