import React, { useState } from "react";
import "./styles.css";

export default function App4() {
    const [BioData, setBioData] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        address: '',
     });

    const inputvalue = (e) => {
           const {name,value} = e.target;
           
        setBioData((previousValue) => {
            return{
                ...previousValue,
                [name]: value,
            }            
        });
    };
    const onsubmits = (e) => {
        e.preventDefault();
    };

    return (
        <div className="App">

            <h2>{`Hello ${BioData.firstname} ${BioData.lastname}`}</h2>
            <h6>{BioData.email} <br />
                {BioData.mobile}<br />
                {BioData.address}</h6>
            <form onSubmit={onsubmits}>
                First name:
        <input
                    name="firstname"
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={inputvalue}
                    value={BioData.firstname}
                />
                <br />
                Last name:
        <input
                    name="lastname"
                    type="text"
                    placeholder="Enter your Last Name"
                    onChange={inputvalue}
                    value={BioData.lastname}
                />
                <br />
                Email:
        <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    onChange={inputvalue}
                    value={BioData.email}
                    // autoComplete='off'
                />
                <br />
                Mobile:
        <input
                    name="mobile"
                    type="number"
                    placeholder="Enter your mobile number"
                    onChange={inputvalue}
                    value={BioData.mobile}
                />
                <br />
                Address:
        <input
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    onChange={inputvalue}
                    value={BioData.address}
                />
                <br />
                <button type="submit">Enter name </button>
                <br />
            </form>
        </div>
    );
}