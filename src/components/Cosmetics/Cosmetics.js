import React from 'react';
import { add as addition, multiply } from '../../utilities/storage';

const Cosmetics = () => {
    const first = 55;
    const second = 89;
    const sum = addition(first, second);
    const multi = multiply(first, second);
    return (
        <div>
            <h2>{sum}, {multi}</h2>
        </div>
    );
};

export default Cosmetics;