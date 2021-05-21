import { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import "./Dashboard.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Webphoto from "../../Image/photo web.jpg"
export default function
    Dashboard() {

    return (

        <Fragment>
            <div className="Dashboardnavbar">  <Navbar /></div>
            <Sidebar/>
<div className="Webphoto">
    
    <img className="Webphotoi" src={Webphoto}>

    </img>
</div>
        </Fragment>
    )
}