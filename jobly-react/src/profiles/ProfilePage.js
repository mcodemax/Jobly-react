import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import JoblyApi from "../api";
import UserContext from "../auth/UserContext";

function ProfilePage() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    console.log(currentUser)
    const defaultFormInfo = {
        // username: currentUser.username,
        password: currentUser.password,
        // confirmpassword: '', //implement later
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    };

    const [formData, setFormData] = useState(defaultFormInfo);
    const [infoChangeErrors, setInfoChangeErrors] = useState([]);

    const navigate = useNavigate();
    
    const handleFormChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    //https://reactjs.org/docs/uncontrolled-components.html

    const onFormSubmit = async (evt) => {
        evt.preventDefault();
        let { 
            password,
            // confirmpassword,
            firstName,
            lastName,
            email
        } = evt.target;

        const changeInfoObj = {};
        
        // confirmpassword = confirmpassword.value
        password = password.value;
        firstName = firstName.value;
        lastName = lastName.value;
        email = email.value;

        /* if(password = confirmpassword) let all run; else=>alert an error and go back */
        if(password) changeInfoObj.password = password;
        if(firstName) changeInfoObj.firstName = firstName;
        if(lastName) changeInfoObj.lastName = lastName;
        if(email) changeInfoObj.email = email;


        // console.log({username, password, firstName, lastName, email})

        // currently no err handling for incompletes or invalids
        //no implentation for actual database changes.
        // menus are reset on app resets
        
        // replace signUp with editing info
        //in backend uses patch => /users/[username] => returns userObj with info
        // maybe have to logout then log back in after this
        
    
        try {
            const res = await JoblyApi.editUserInfo(currentUser.username, changeInfoObj);
            console.log(res)
            setCurrentUser(res)  
        } catch (error) {
            setInfoChangeErrors(error);
            
            alert(error)
            setFormData(defaultFormInfo);
        }
    };

    function editForm() {
        return (
            <>
                <form className="SignUpForm" onSubmit={onFormSubmit}>
                    
                    <label htmlFor="password">New Password</label><br/>
                    <input type="password" id="password" name="password"
                     value={formData.password} onChange={handleFormChange}/><br/>
    
                    <label htmlFor="firstName">First Name</label><br/>
                    <input type="firstName" id="firstName" name="firstName"
                     value={formData.firstName} onChange={handleFormChange}/><br/>
    
                    <label htmlFor="lastName">Last Name</label><br/>
                    <input type="lastName" id="lastName" name="lastName"
                     value={formData.lastName} onChange={handleFormChange}/><br/>
    
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" id="email" name="email"
                     value={formData.email} onChange={handleFormChange}/><br/>
                    
                    <input type="submit" id="submit" name="submit" value="Confirm Changes"/>
    
                    {/* add a drop down menu to chose either drinks or snacks */}
                </form>
            </>
        )
    }

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
            {editForm()}
        </>
    );
}

export default ProfilePage;