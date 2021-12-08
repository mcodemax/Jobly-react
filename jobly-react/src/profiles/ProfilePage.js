import React, { useState, useContext } from "react";
import JoblyApi from "../api";
import UserContext from "../auth/UserContext";


function ProfilePage() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    
    const defaultFormInfo = {
        // username: currentUser.username,
        password: currentUser.password,
        // confirmpassword: '', //implement later
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    };

    const [formData, setFormData] = useState(defaultFormInfo);
    // const [infoChangeErrors, setInfoChangeErrors] = useState([]); //not implemented
    
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

        // currently no err handling for incompletes or invalids
        //no implentation for actual database changes.
        // menus are reset on app resets
       
        try {
            const res = await JoblyApi.editUserInfo(currentUser.username, changeInfoObj);
            console.log(res)
            setCurrentUser(res)  
        } catch (error) {
            // setInfoChangeErrors(error); //not implemented
            
            alert(error)
            setFormData(defaultFormInfo);
        }
    };

    function editForm() {
        return (
            <>
                <form className="ProfilePage-form" onSubmit={onFormSubmit}>
                    
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
                </form>
            </>
        )
    }

    return (
        <>
            <div className="ProfilePage">
                <p>User Name: {currentUser.username}</p>
                <p>First Name: {currentUser.firstName}</p>
                <p>Last Name: {currentUser.lastName}</p>
                <p>Email: {currentUser.email}</p>
                <p>Admin Status: {currentUser.isAdmin ? `Yes` : `No`}</p>
            </div>
            <div>
                <p>Edit Your Info:</p>
                {editForm()}
            </div>
        </>
    );
}

export default ProfilePage;