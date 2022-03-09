import React, { createContext, useState, useEffect } from "react";
import { DetailCharactersGet } from "./../constants";

export const CharacterContext = createContext();

const CharacterContextProvider = ({ children }) => {
    const char_id = window.location.pathname.split("/")[2];
    const [doneLoad, setDoneLoad] = useState();
    const [currentChar, setCurrentChar] = useState([]);
    const [error, setError] = useState(false);


    useEffect(() => {

        const getChar = () => {
            fetch(DetailCharactersGet(char_id))
            .then((res) => res.json())
            .then((response) => {
                setCurrentChar(response.data.results[0])
                setDoneLoad(true);
            })
            .catch((error) => console.log(error))
        }

        getChar(char_id);

    }, [char_id]);

    return (
        <CharacterContext.Provider value={{ doneLoad, currentChar }}>
            {children}
        </CharacterContext.Provider>
    );

}

export default CharacterContextProvider