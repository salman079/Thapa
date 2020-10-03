import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const Error = () => {
    const [data, setData] = useState(null);
    const [delayed, setDelayed] = useState(true);
    // const [i, setI] = useState(0);

    // for (i = 0; i < 1000; setI(i++)) { console.log(i) }
    useEffect(() => {
        const timeout = setTimeout(() => {<Redirect to="/" />;
        },10000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <p>Ooopsss!!!!!! Error page</p>
            <NavLink exact activeClassName="active_class" to="/">Home </NavLink>
            
        </>
    )
}

export default Error;
