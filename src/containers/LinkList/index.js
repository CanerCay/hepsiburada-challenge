import React from 'react';
import Helmet from "react-helmet";
import styled from 'styled-components';

import Header from "../../components/Shared/Header";
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import {LinkContext} from "../../contexts/LinkProvider";

const Container = styled.div`
  padding: 4em;
  max-width: 400px;
  margin: auto;

  hr {
    margin: 20px 0;
    border-width: 1px;
  }
`;

const Welcome = () => {
  return (
    <>
      <Helmet>
        <title>Welcome</title>
        <meta name="description" content="Welcome to HepsiBurada Interview Challenge"/>
      </Helmet>
      <Header/>
      <Container>
        <Link
          component={Button}
          to='/add-link'
          block
        >
          Submit a Link
        </Link>
        <hr/>
        <LinkContext.Consumer>
          {({links}) =>
            links.map((link) =>
              (
                <div>
                  {link.name}
                  {link.url}
                </div>
              ))}
        </LinkContext.Consumer>
      </Container>
    </>
  );
};

export default Welcome;
