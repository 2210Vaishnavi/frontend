import React, { useState , useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import "../component/style.css";
// import "../component/validation.js"

const Signup = () => {
    // React States
    const initvalues={uname:"", password:"", fname:"", lname:"", dob:"", contact:"", address:"", city:"", pincode:""}
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
     if(isSubmit){
        return <Navigate to={{pathname: '/home', state: {formvalues: formvalues}}}/>

     }
    const validate = (values) => {
        const errors={};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
        if(!values.fname){
            errors.fname="First Name is required.";
        }
        if(!values.lname){
            errors.lname="Last Name is required.";
        }
        if(!values.city){
            errors.city="City is required.";
        }
        if(!values.address){
            errors.address="Address is required.";
        }
        if(!values.pincode){
            errors.pincode="Pincode is required.";
        }
        return errors;
    }

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col><div className="input-container">
                                <label>Email </label><input type="text" name="uname" placeholder="Email-id" values= {formvalues.uname} onChange={handleChange}/>
                            </div>
                            <p >{formErrors.uname}</p>
                        </Col>
                        <Col>
                            <div className="input-container">
                                <label>Password </label><input type="password" name="password" placeholder="Password" values= {formvalues.password} onChange={handleChange} />
                            </div>
                            <p >{formErrors.password}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="input-container">
                                <label>First Name </label><input type="text" name="fname" placeholder="First Name" values={formvalues.fname} onChange={handleChange} />
                            </div>
                            <p >{formErrors.fname}</p>
                        </Col>
                        <Col>
                            <div className="input-container">
                                <label>Last Name </label><input type="text" name="lname" placeholder="Last Name" values={formvalues.lname} onChange={handleChange}/>
                            </div>
                            <p >{formErrors.lname}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="input-container"><label>Date of Birth </label>
                                <input type="date" name="dob" required />
                            </div>
                        </Col>
                        <Col>
                            <div className="input-container">
                                <label>Contact Number </label><input type="tel" name="mobile" placeholder="Mobile-No" values={formvalues.mobile} onChange={handleChange} />
                            </div>
                            <p >{formErrors.mobile}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="input-container">
                                <label>Address </label><textarea name="address" placeholder="Address" values={formvalues.address} onChange={handleChange} />
                            </div>
                            <p >{formErrors.address}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="input-container">
                                <label>City</label><input type="text" name="city" placeholder="City" values={formvalues.city} onChange={handleChange} />
                            </div>
                            <p >{formErrors.city}</p>
                        </Col>
                        <Col>
                            <div className="input-container">
                                <label>pincode </label><input type="text" name="pincode" placeholder="Pincode" values={formvalues.pincode} onChange={handleChange}/>
                            </div>
                            <p >{formErrors.pincode}</p>
                        </Col>
                    </Row>                   
                    <Row>
                        <Col>
                            <div className="button-container">
                                <input type="submit" />
                                
                                <input type="reset" />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign Up</div>
                {renderForm}
            </div>
        </div>
    );
}

export default Signup;


// this code for transferring data to next page
// In the component where you want to display the form data, access it using the "location.state" property:
// import { useLocation } from 'react-router-dom';

// function ThankYouPage() {
//   const location = useLocation();
//   const formData = location.state
