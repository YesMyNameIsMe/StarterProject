import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from '../contexts/authContext'

function PrivateRoute({children}) {
    const {user} = useAuth(); // This creates the user object with the useAuth function.
    // Note that if the user doesn't exist, the object is UNDEFINED.
    // If the user is UNDEFINED, boot them back to the landing page.
    if(!user)
    {
        return <Navigate to="/" /> 
    }
    
    return children; // Otherwise, render the child components. 
}

export default PrivateRoute