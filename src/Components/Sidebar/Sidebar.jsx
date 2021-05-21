import React from 'react';
import JobsImage from "../../Image/jobss.png"
import coursesImage from "../../Image/Courses.png"
import TechnoImage from "../../Image/technology.jpg"
import "./Sidebar.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Fragment } from 'react';




export default function Drawer() {


    return (
        <Router>
            <div>
                <div className="drawerContainer">
                    <div className="Jobsimagetextdiv">
                        <img className="Jobsimage" src={JobsImage} alt="" />
                        <h2 className="Jobsimagetext" >Jobs</h2>
                        <div className="jobshover" >
                            <div><Link to="./navbar"><h3>Goverments</h3></Link></div>
                            <div><Link to="./navbar"><h3>Private</h3> </Link></div>

                        </div>
                    </div>


                    <div className="coursesimagetextdiv">
                        <img className="coursesimage" src={coursesImage} alt="" />
                        <h2 className="coursesimagetext" >Courses</h2>
                        <div className="coursesshover" >
                            <div><Link to="./navbar"><h3>Free</h3></Link></div>
                            <div><Link to="./navbar"><h3>Paid</h3> </Link></div>

                        </div>
                    </div>

                    <div className="techimagetextdiv">
                        <img className="techimage" src={TechnoImage} alt="" />
                        <h2 className="techimagetext" >Tech.</h2>
                    </div>
                </div>


            </div>
        </Router>
    );
}
