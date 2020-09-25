import React, {useContext} from 'react';
import { FnName, LnName } from '../App';

export default function CompZ() {
    const namefirst = useContext(FnName);
    const namelast = useContext(LnName);
    return (
        <>
        This is Component Z and this is first name <strong>{namefirst}</strong>
        and this is last name <strong>{namelast}</strong>
        </>
    )
};
