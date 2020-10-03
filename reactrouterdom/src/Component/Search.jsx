import React, { useState } from 'react';
import Sreasult from './Sresult';

const Search = () => {
    const [img, setImg] = useState("");
    return (
        <>
            This is Search page !!!!!!!!
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="search"
                    value={img}
                    onChange={(e) => { setImg(e.target.value) }}
                />
                {img === "" ? null: <Sreasult name={img}/>}
            </div>
        </>
    )
}

export default Search;
