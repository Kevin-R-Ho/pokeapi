import React from 'react';
import {Nav, Title, Credit} from './PokeNavbarStyle';

const PokeNavbar = () => {
    return (
        <Nav>
            <Title>PokeAPI</Title>
            <Credit>Information provided by &nbsp;
                <a href="https://pokeapi.co/">Pokeapi.co</a>
            </Credit>
        </Nav>
    )
}

export default PokeNavbar;