import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";

import Logo from '../../../assets/images/logo.svg';

const EmptyBar = styled.div`
  box-shadow: 0 1px 0 0 #eae8e4;
  min-height: 2.5em;
`;

const Container = styled.div`
  min-height: 4.5em;
  box-shadow: inset 0 -1px 0 0 #eae8e4;
  align-items: center;
  justify-content: space-between;
  display: flex; 
  padding: 0 3.125vw;
  
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    > a {
      margin: 15px 0;
    }
  }  
`;

const Header = () => {
  return (
    <>
      <EmptyBar/>
      <Container>
        <Link to={'/'}>
          <img src={Logo} alt="HepsiBurada brand"/>
        </Link>
      </Container>
    </>
  );
};

export default Header;
