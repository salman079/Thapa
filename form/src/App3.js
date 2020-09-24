import React, { useState } from "react";
import "./styles.css";

export default function App3() {
    const [BioData, setBioData] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
    });

    const inputvalue = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setBioData((previousValue) => {
            if (name === "firstname") {
                return {
                    firstname: value,
                    lastname: previousValue.lastname,
                    email: previousValue.email,
                    mobile: previousValue.mobile,
                };
            } else if (name === "lastname") {
                return {
                    firstname: previousValue.firstname,
                    lastname: value,
                    email: previousValue.email,
                    mobile: previousValue.mobile,
                }
            } else if (name === "email") {
                return {
                    firstname: previousValue.firstname,
                    lastname: previousValue.lastname,
                    email: value,
                    mobile: previousValue.mobile,
                }
            } else if (name === "mobile") {
                return {
                    firstname: previousValue.firstname,
                    lastname: previousValue.lastname,
                    email: previousValue.email,
                    mobile: value,
                }
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
                {BioData.mobile}</h6>
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
                <button type="submit">Enter name </button>
                <br />
            </form>
        </div>
    );
}