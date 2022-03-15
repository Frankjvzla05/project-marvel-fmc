import React, { useContext } from 'react';
import { CharactersContext } from '../../contexts/CharactersContext';
import InfoCharacters from './Characters';
import Loader from '../Loader/Loader';

const Characters = () => {
    const { characters, doneFetch } = useContext(CharactersContext);

    return (

        <div className="characters-page">


            {doneFetch ?
                (characters.length ?
                    <InfoCharacters characters={characters} />
                    :
                    "No se encontro la informacion")


                :
                < Loader />
            }

        </div>

    );
};

export default Characters;