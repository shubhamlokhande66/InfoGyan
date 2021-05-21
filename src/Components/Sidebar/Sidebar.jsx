import React from 'react';
import JobsImage from "../../Image/jobss.png"
import coursesImage from "../../Image/Courses.png"
import "./Sidebar.css"




export default function Drawer() {


    return (
        <div>
            <div className="drawerContainer">
                        <div className="Jobsimagetextdiv">
                            <img className="Jobsimage" src={JobsImage} alt="" />
                            <h2 className="Jobsimagetext" >Jobs</h2>
                        </div>      


                        <div className="coursesimagetextdiv">
                            <img className="coursesimage" src={coursesImage} alt="" />
                            <h2 className="coursesimagetext" >Courses</h2>
                        </div>  

            </div>


        </div>
    );
}
