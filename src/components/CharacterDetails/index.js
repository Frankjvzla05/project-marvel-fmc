import React, { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import Loader from "../Loader/Loader";
import DetailCharacter from "./DetailCharacter";

const Character = () => {
    const { currentChar, doneFetch } = useContext(CharacterContext);
    console.log(currentChar, "index")
    return (
        <div className="detail-page">
            {doneFetch ?
                (currentChar ?
                    <DetailCharacter currentChar={currentChar} />
                    :
                    "No se encontro la informacion")
                :
                <Loader />
            }
        </div>

    );
};

export default Character;
