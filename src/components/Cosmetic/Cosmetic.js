import React from 'react';

const Cosmetic = (props) => {
    const {name, price} = props.cosmetic;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
        </div>
    );
};

export default Cosmetic;