import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, []);

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');
    }

    return (
        <div className="signup">
            <div className="coursebanner">
                   <div className="courseheading">Apply Online</div>
                  <div className="coursedetails">Home Apply Online</div>
               </div>
            <div className="registerbox">
            <div className="register">Register</div>
            <input className="inputBox"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input className="inputBox"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={collectData} className="signupbutton">Signup</button> </div>
        </div>
    );
};

export default SignUp;