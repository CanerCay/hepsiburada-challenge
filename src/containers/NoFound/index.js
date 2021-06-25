import React from 'react';
import {Link} from 'react-router-dom';

import Header from "../../components/Shared/Header";
import styled from "styled-components";

const Container = styled.div`
  padding: 4em;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const NotFound = () => (
  <>
    <Header/>
    <Container>
      <h1>404 - Not Found!</h1>
      <p>You're trying to access a page that does not exist.</p>
    </Container>
    <Link to="/">
      Go Home
    </Link>
  </>
);


export default NotFound;
