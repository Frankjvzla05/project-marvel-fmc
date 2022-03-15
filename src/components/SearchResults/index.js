import React, { useContext } from 'react';
import { SearchCharactersContext } from '../../contexts/SearchCharactersContext';
import Loader from '../Loader/Loader';
import InfoCharacters from '../Characters/Characters';
import NotFound from '../NotFound';

const SearchResults = () => {
    const { searchCharactersResults, doneFetch } = useContext(SearchCharactersContext);

    return (
        <>
            {
                doneFetch ? (
                    searchCharactersResults.length > 0 ?
                        < InfoCharacters characters={searchCharactersResults} /> :
                        <NotFound />) :
                    <Loader />
            }
        </>
    )
}

export default SearchResults;
