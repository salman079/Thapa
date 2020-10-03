import React from 'react';

const Sresult = ({name}) => {
    const img = `https://source.unsplash.com/400x300/?${name}`;
    console.log(img);
    return (
        <>
            <div>
                <img src={img}alt="images"/>
            </div>
        </>
    )
}

export default Sresult;
