import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const handlePurchase = id => {
        // set to localstorage
        console.log(id);
        addToDb(id);
    }
    const handleRemove = id => {
        deleteFromDb(id);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>ID: {id} Price: {price}</p>
            <button onClick={() => handlePurchase(id)}>Purchase</button>
            <button onClick={() => handleRemove(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;