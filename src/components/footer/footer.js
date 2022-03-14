import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const WrapperFooter = styled.footer`
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    align-items: center;
    height: 50px;
    background-color: #202020;
    width: 100%;
    position: fixed;
    bottom: 0;
    `;

    return (
        <WrapperFooter>
            <p>&copy; {new Date().getFullYear()} - Francisco Maduro</p>
        </WrapperFooter>
    )
};

export default Footer;