import React, { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import DetailCharacter from "./DetailCharacter";

const Character = () => {
    const { currentChar, doneLoad } = useContext(CharacterContext);
    console.log(currentChar, "index")
    return (
        <>
            {doneLoad ?
                (currentChar ?
                    <DetailCharacter currentChar={currentChar} />
                    :
                    "No se encontro la informacion")
                :
                "cargando"
            }
        </>

    );
};

export default Character;
