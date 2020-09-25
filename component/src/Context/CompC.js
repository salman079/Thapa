import React from 'react';
import { FirstName, LastName } from '../App';

export default function CompC() {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (<>
                                    This is Component C and this is my first name <strong>{fname}</strong>
                                    and this is last name <strong>{lname}</strong>
                                </>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }}</FirstName.Consumer>
        </>
    )
};
