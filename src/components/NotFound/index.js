import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {

  const WrapperNotFound = styled.div`
  width: 20%;
  margin: 15% auto 0;
  text-align: center;
  line-height: 1.5rem;
  `;

  return (
    <WrapperNotFound>
      <p>No se encontraron resultados!</p>
      <Link to={`/`} className="buttonOption">Volver</Link>
    </WrapperNotFound>
  )


};

export default NotFound;