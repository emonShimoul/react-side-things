import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const handlePurchase = id => {
        // set to localstorage
        console.log(id);
        addToDb(id);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>ID: {id} Price: {price}</p>
            <button onClick={() => handlePurchase(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;