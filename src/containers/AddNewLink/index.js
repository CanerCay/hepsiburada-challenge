import React, {useState} from 'react';
import Helmet from "react-helmet";
import {Redirect, useHistory} from 'react-router-dom';

import Header from "../../components/Shared/Header";
import {LinkContext} from "../../contexts/LinkProvider";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Container = styled.div`
  padding: 4em;
  max-width: 400px;
  margin: auto;

  hr {
    margin: 20px 0;
    border-width: 1px;
  }
  
  
`;

const AddNewLink = () => {
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Add new link</title>

        <meta name="description" content="AddNewLink Page bla bla"/>
      </Helmet>
      <Header/>
      <LinkContext.Consumer>
        {({links, setLinks}) => (
          <Container>
            <Input placeholder='Link Name' value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder='Link URL' value={url} onChange={(e) => setURL(e.target.value)} />
              <Button
                onClick={() => {
                  setLinks([
                    ...links,
                    {
                      url,
                      name,
                    },
                  ])

                  history.push('/');
                }}
              >
                Add Link
              </Button>
          </Container>
        )}
      </LinkContext.Consumer>
    </>
  );
};

export default AddNewLink;
