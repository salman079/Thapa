import React, { useState, useRef } from "react";
import "./styles.css";

export default function App5() {
    const input = useRef();
    const input1 = useRef();
    const [name, setName] = useState();
    const [lname, setLName] = useState();
    const [meal, setMeal] = useState();
    

    // const [BioData, setBioData] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     mobile: '',
    //     address: '',
    // });

    const inputvalue = (e) => {
        setMeal(e.target.checked);
        console.log("checked")
        // const { name, value } = e.target;

        // setBioData((previousValue) => {
        //     return {
        //         ...previousValue,
        //         [name]: value,
        //     }
        // });
    };
    const onsubmits = (e) => {
        e.preventDefault();
        setName(input.current.value);
        setLName(input1.current.value);
    };

    return (
        <div className="App">
            First Name: {name} and Last Name: {lname}<br/>
            your selected meal is {meal}
            {/* <h2>{`Hello ${BioData.firstname} ${BioData.lastname}`}</h2>
            <h6>{BioData.email} <br />
                {BioData.mobile}<br />
                {BioData.address}</h6> */}
            <form
                onSubmit={onsubmits}
            >
                First name:
        <input
                    // name="firstname"
                    type="text"
                    placeholder="Enter your First Name"
                    ref={input}
                // onChange={inputvalue}
                // value={name}
                // value={BioData.firstname}
                />
                <br />
                Last name:
                <input
                    // name="lastname"
                    type="text"
                    placeholder="Enter your Last Name"
                    ref={input1}
                // onChange={inputvalue}
                // value={BioData.lastname}
                />
                <br />
                <input
                    type='radio'
                    checked='Lunch'
                    name = 'meals'
                    onChange={inputvalue}
                />
                Lunch
                <input
                    type='radio'
                    checked='Dinner'
                    name = 'meals'
                    onChange={inputvalue}
                />
                Dinner
<br />

                {/* Email:
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
                <br /> */}
                <button type="submit">Enter name </button>
                <br />
            </form>
        </div>
    );
}