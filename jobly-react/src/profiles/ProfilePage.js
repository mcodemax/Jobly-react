import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function ProfilePage() {
    const {currentUser} = useContext(UserContext);

    

    return (
        <>
            <div>
                {/* {username: 'Fname1', firstName: 'Adam',
                 lastName: 'Ant', email: 'Adam@smolboi.net', isAdmin: false, …} */}
                <p>User Name: {currentUser.username}</p>
                <p>First Name: {currentUser.firstName}</p>
                <p>Last Name: {currentUser.lastName}</p>
                <p>Email: {currentUser.email}</p>
                <p>Admin Status: {currentUser.isAdmin ? `Yes` : `No`}</p>
                
            </div>
        </>
    );
}

export default ProfilePage;