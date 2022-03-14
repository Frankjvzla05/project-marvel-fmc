import React from 'react';
import InfoCharacterPreview from '../Characters/Character';

const InfoCharacters = ({ characters }) => {

  return (
    <div className="Character-preview">
      <div className="preview">
        {characters
          .map((char) => (
            <InfoCharacterPreview key={char.id} char={char} />
          ))}
      </div>
    </div>
  )

}

export default InfoCharacters;