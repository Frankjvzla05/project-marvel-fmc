import React, { useContext } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import InfoCharacters from "./Characters";

const Characters = () => {
    const { characters, doneLoad } = useContext(CharactersContext);

    return (

        <div className="characters-page">


            {doneLoad ?
                (characters.length ?
                    <InfoCharacters characters={characters} />
                    :
                    "error")

                :
                "No se encontro la informacion"
            }

        </div>

    );
};

export default Characters;