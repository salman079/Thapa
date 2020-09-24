import React, { useState } from "react";
import "./styles.css";

export default function App2() {
    const [fullname, setFullName] = React.useState({
        firstname: '',
        lastname: ''
    });
    
    const inputvalue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        console.log(value);

        setFullName((previousValue) => {
            console.log(previousValue);
            if (name === "firstname"){
                return{
                    firstname: value,
                    lastname: previousValue.lastname,
                };
            } else if (name === "lastname"){
                return{
                    firstname: previousValue.firstname,
                    lastname: value,
                }
            }
        });
    };
    const onsubmits = (e) => {
        e.preventDefault();
    };

    return (
        <div className="App">
            <form onSubmit={onsubmits}>
                Enter First name:
        <input
                    name="firstname"
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={inputvalue}
                    value={fullname.firstname}
                />
                <br />
                Enter Last name:
        <input
                    name="lastname"
                    type="text"
                    placeholder="Enter your Last Name"
                    onChange={inputvalue}
                    value={fullname.lastname}
                />
                <br />
                <button type="submit">Enter name</button>
                <br />
                {`Hello ${fullname.firstname} ${fullname.lastname}`}
            </form>
        </div>
    );
}
