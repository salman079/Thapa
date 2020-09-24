import React, { useState } from "react";
import "./styles.css";

export default function App2() {
    const [name, setName] = React.useState("");
    const [lastname, setLastName] = React.useState("");
    const [fullname, setFullname] = React.useState("");
    
    const inputvalue = (e) => {
        return setName(e.target.value)
    };
    const inputvalue2 = (e) => {
        return setLastName(e.target.value)
    };
    const onsubmits = (e) => {
        e.preventDefault();
        setFullname(`${name} ${lastname}`);

    };

    return (
        <div className="App">
            <form onSubmit={onsubmits}>
                Enter First name:
        <input
                    //   name="namelist"
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={inputvalue}
                    value={name}
                />
                <br />
        Enter Last name:
        <input
                    //   name="lnamelist" 
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={inputvalue2}
                    value={lastname}
                />
                <br />
                <button type="submit">Enter name</button>
                <br />
                {`Hello ${fullname}`}
            </form>
        </div>
    );
}
