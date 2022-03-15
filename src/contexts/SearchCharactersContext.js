import React, { createContext, useEffect, useState } from 'react';
import { SearchCharactersGet } from '../constants/index';

export const SearchCharactersContext = createContext();

const SearchCharactersContextProvider = ({ children }) => {
    const query = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState();
    const [searchCharactersResults, setSearchCharactersResults] = useState([]);

    useEffect(() => {

        const getSearchCharacters = () => {
            fetch(SearchCharactersGet(query))
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.data.results.length);
                    setDoneFetch(true);
                    setSearchCharactersResults(data.data.results);

                })
                .catch((err) => console.log(err));
        }

        getSearchCharacters(query);
    }, [query]);


    return (
        <SearchCharactersContext.Provider value={{ doneFetch, searchCharactersResults }}>
            {children}
        </SearchCharactersContext.Provider>
    );
}

export default SearchCharactersContextProvider;
