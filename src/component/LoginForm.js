import React, { useState ,useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./style.css";


const LoginForm = () => {
   
    const initvalues={uname:"",password:""}
    const[formvalues,setFormvalues]=useState(initvalues);
    const[formErrors,setFormErrors]=useState({});
    const [isSubmit, setIsSubmit]=useState(false);

    const handleChange=(e)=>{
       const{ name, value} =e.target;
       setFormvalues({...formvalues,[name]: value});
       //console.log(formvalues);
        }

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        setFormErrors(validate(formvalues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if((Object.keys(formErrors)).length === 0 && isSubmit) {
            console.log(formvalues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors={};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //const regex= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

        if(!values.uname){
            errors.uname="Username(Email) is required.";
        }else if (!regex.test(values.uname)){
            errors.uname="This is not a valid Email-id format.";
        }
        if(!values.password){
            errors.password="Password is required.";
        }else if(values.password.length < 4){
            errors.password="Password must be more than 4 characters.";
        }else if(values.password.length > 10){
            errors.password="Password can not exceeds 10 characters.";
        }
        return errors;
    }

    // JSX code for login form
    const renderForm = (
        <div className="form login">
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="success message">Signed in Successfully</div>) : (<pre>{JSON.stringify(formvalues,undefined,2)}</pre>)}
            <form onSubmit={handleSubmit}>
            <div className="title">Sign In</div>
                <div className="input-container">
                    <label>Username <sup>*</sup> </label>
                    <input type="text" name="uname" placeholder= "Email-id" values= {formvalues.uname} onChange={handleChange} />
                </div>
                <p >{formErrors.uname}</p>
                <div className="input-container">
                    <label>Password <sup>*</sup></label>
                    <input type="password" name="password" placeholder="Password" values= {formvalues.password} onChange={handleChange}  />
                </div>
                <p >{formErrors.password}</p>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form"> 
            {renderForm}
            <div>
                For new User <Link  to="/signup "> Register </Link>
            
            </div>  
            </div>
        </div>
    );
}

export default LoginForm;

