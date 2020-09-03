import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="main-about">
                <div className="header-about">
                    <h2>ABOUT G.PA</h2>
                </div>

                <div className="body-about">
                    <div className="body-about-main">
                    <h2>Why G.PA?</h2>

                        <p>
                            As I sat and thought of a project that could be done for my school assestment which has to do with something that wuld help the students on campus. I decided to do a Grade Point calculator. <br /> There are times where we as student want to know where we stand before the session ends, this app will help you calculate for each course taken. Just have your course name, the grade you had in the exam and how many crdit unit the course is. Using some algorithms I have been able to make the calculations precise. <br /> Feel free to use the app whenever, more fetures will be added as time goes on, but for now, ENJOY!
                        </p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default About
