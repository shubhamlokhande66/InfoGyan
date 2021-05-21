import { Fragment } from "react";
import Home from "../../Components/Home/Home";
import Navbar from "../../Components/Navbar/Navbar"
import "./Dashboard.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
export default function
    Dashboard() {

    return (

        <Fragment>
            <div className="Dashboardnavbar">  <Navbar /></div>
            {/* <div className="Dashboardhome"> <Home /></div> */}
            <Sidebar/>
        </Fragment>
    )
}