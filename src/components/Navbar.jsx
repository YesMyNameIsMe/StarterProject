// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {

    const auth = getAuth();
    function signOutPage(){
        signOut(auth);
        console.log("User Signed Out");
    }

    return (<>
    <div className="flex flex-row justify-between items-center px-20 py-4">  
        <Link to="/home" className="text-forestgreen text-3xl poppins-bold"> Slop Corporation </Link>
        <div className="flex flex-row gap-8 poppins-bold">
            <Link to="/map" className="hover:text-coolgray transition duration-300">Map</Link>
            <Link to="/rsvp" className="hover:text-coolgray transition duration-300">RSVP</Link>
            <Link to="/activity" className="hover:text-coolgray transition duration-300">Activity</Link>
            <Link to="/" onClick={signOutPage} className="hover:text-coolgray transition duration-300 poppins-regular">Sign Out</Link> 
        </div>
    </div>
    <hr className="w-full border-gray-400"/>
    </>);
}

export default Navbar;