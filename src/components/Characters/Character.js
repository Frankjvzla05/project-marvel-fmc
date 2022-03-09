import React from "react";
import ButtomOption from "../Common/ButtonOption";

const InfoCharacterPreview = ({ char }) => {
    const { id, name, thumbnail } = char;
    return (


        <div className="Character-item" id={id}>
            <img className="Character-img" src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name}`} title={`${name}`} />
            <div className="Character-footer">
                <h3 className="name">{`Personaje: ${name}`}</h3>
                <ButtomOption to={`/character/${id}`} text={`Ver detalles de personaje`} />
            </div>
        </div>


    )

}

export default InfoCharacterPreview;