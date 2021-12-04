import React, { useState } from "react";
import JoblyApi from './api';
import { useNavigate } from "react-router-dom";


/* 
In backend: 
http://localhost:3001/auth/token =>
{ "username":"testuser", "password":"password" }

*/

function Login({ login }) {
    const emptyForm = {
        username: '',
        password: ''
    };
    const [formData, setFormData] = useState(emptyForm);
    const [loginErrors, setloginErrors] = useState([]);

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
            username,
            password
        } = evt.target;
        
        username = username.value;
        password = password.value;
        console.log(username, password)
        // currently no err handling for incompletes or invalids
        //no implentation for actual database changes.
        // menus are reset on app resets
        
        const res = await login(username, password)
        console.log(res)
        if (res.success) {
            navigate("/companies");
        } else {
            console.log('hi')
            setloginErrors(res.errors);
        }

        setFormData(emptyForm);
    };

    //make a form

    // make api call to login
    // api call via
    // store Login state outside this funciton
    return (
        <>
            <form className="Login" onSubmit={onFormSubmit}>
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username"
                 value={formData.username} onChange={handleFormChange}/><br/>

                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" name="password"
                 value={formData.password} onChange={handleFormChange}/><br/>
                
                <input type="submit" id="submit" name="submit" />

                {/* add a drop down menu to chose either drinks or snacks */}
            </form>
        </>
    );
}

export default Login;


// node -i -e "$(< Login.js)"