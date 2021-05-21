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
    
    <img className="Webphotoi" src={Webphoto}/>
    <div>
        <h2 className="quotes">"The road to success <br /> and the road to failure <br /> are almost exactly the same."</h2>
        <h1 className="Name">Welcome <br/> to <br/>Shubh InfoTech</h1>
    </div>
</div>
        </Fragment>
    )
}