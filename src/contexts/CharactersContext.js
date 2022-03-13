import React, { createContext, useState, useEffect } from "react";
import { marvelCharacters } from "../constants";

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {

    const [doneFetch, setDoneFetch] = useState();
    const [characters, setCharacters] = useState([]);

    // didMount, didUpdate, willUnmount
    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = () => {

        fetch(marvelCharacters())
            .then((res) => res.json())
            .then((res) => res.data.results)
            .then((data) => {
                setCharacters(data);
                setDoneFetch(true);
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <CharactersContext.Provider value={{ doneFetch, characters }}>
            {children}
        </CharactersContext.Provider>
    );


}

export default CharactersContextProvider;