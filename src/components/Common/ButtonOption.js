import React from 'react';
import { Link } from 'react-router-dom';

const ButtomOption = ({ to, text }) => (

    <Link className="buttonOption" to={to}>
        <p>{text}</p>
    </Link>
)

export default ButtomOption