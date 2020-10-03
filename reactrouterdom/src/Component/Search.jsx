import React, { useState, useRef } from 'react';
import Sresult from './Sresult';

const Search = () => {
    // const img = useRef();
    // const [a,setA]=useState();
    const [img, setImg] = useState("");

    // const showValue = () => {
        // setA(img.current.value);
    // }
    return (
        <>
            This is Search page !!!!!!!!
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="search"
                    // ref={img}
                value={img}
                onChange={(e) => { setImg(e.target.value) }}
                />
                {img === "" ? null: <Sresult name={img}/>}
                {/* <button onClick={showValue}>hello</button> */}
                {/* {a === "" ? null: <Sresult name={a}/>} */}
            </div>
        </>
    )
}

export default Search;
