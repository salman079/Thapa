import React, { useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const Users = () => {
    const { username } = useParams();
    const location = useLocation();
    const history = useHistory();
    const [msg, setMsg] = useState("");

    return (
        <>
            This is Users - Mr {username}'s - page
            <p> My current locaiton is {location.pathname}</p>
            {location.pathname === `/users/Hassan` ?
                (<button onClick={() => {
                    setMsg("Waoooo!!!!!")
                    alert("We are going back")
                    history.goBack()
                    // (<button onClick={() => { history.goBack() }}> Back </button>)
                }}>Surprise</button>) :
                null}
            {msg}
        </>
    )
}

export default Users;
