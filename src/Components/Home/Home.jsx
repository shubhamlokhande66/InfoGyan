import React, { Fragment, usestate } from "react";
import HomeVideo from "./Home.mp4";
import "./Home.css";
import { AppBar, Link } from '@material-ui/core';

export default function Home() {


    return (
        <Fragment>
            <AppBar className="Appbar" position="fixed" color="transparent">
                <li className="Shubham"> <Link >Shubham</Link > </li>

            </AppBar>
            <div className="namehome">
                <h3 className="name">Welcome To ShubhInfo</h3>
            </div>

            <div className="videohome">
                <video autoPlay muted loop id="myVideo" >
                    <source src={HomeVideo} type="video/mp4"></source>
                </video>
            </div>


        </Fragment>
    )



}