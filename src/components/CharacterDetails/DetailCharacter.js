import React from "react";
import ButtomOption from "../Common/ButtonOption";

const DetailCharacter = ({ currentChar }) => {
    const { name, thumbnail, urls, comics, series, stories } = currentChar;
    return (
        <div className="containerDetail">
            <div className="char-detail">
                < img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`char-${name}`} title={`${name}`} />
                <div className="char-footer">
                    <h3 className="name-detail">{`Personaje: ${name}`}</h3>

                    <h3 className="info-detail">{`Comics: ${comics.available}`}</h3>
                    <h3 className="short_description">{`Series: ${series.available}`}</h3>
                    <h3 className="short_description">{`Historias: ${stories.available}`}</h3>
                    <a href={urls[0].url} target="_blank" rel="nooperer" className="char_url">Informacion del Personaje</a>
                    
                </div>
                <ButtomOption to={"/"} text="Volver" />
            </div>
        </div>

    )
}
export default DetailCharacter;
