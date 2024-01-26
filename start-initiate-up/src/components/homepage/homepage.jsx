import React from 'react';
import '../homepage/homepage.css';
import imgperson from '../homepage/character-1.png';
import tree from '../homepage/Group 56.png';


const Homepage = () => {
    return (
        <>
          <div className="homepage">
            <div className="home1">
            <div className="imgperson">
                <img src={imgperson} alt="" />
            </div>
            <div className="circleimg">
            <img src={tree} alt="" />
            </div>
            </div>
            <div className="home2">
            <div className="info">
               "unlock the proffesional growth We've got your journey covered "
            </div>
            </div>
            <div className="home3">
                <div className="text3home1">
                    <b>looking for jobs/Internship ??</b><br /> Just <a href="">Register</a> here 
                </div>
                <div className="text3home2">
                    <b>Seeking for Talent?</b><br /> Just <a href="">Register</a> here 
                </div>
                <div className="text3home2">
                    <b>See some of our amazing Courses </b><br /> Just <a href="">Click</a> here 
                </div>
            </div>

          </div>
        </>
    )
}

export default Homepage