import React, {useState} from 'react';
import Helmet from "react-helmet";
import {useHistory} from 'react-router-dom';
import styled from "styled-components";

import Header from "../../components/Shared/Header";
import {LinkContext} from "../../contexts/LinkProvider";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Container = styled.section`
  padding: 4em;
  max-width: 500px;
  margin: auto;

  hr {
    margin: 20px 0;
    border-width: 1px;
  }
  
  ${Input} {
    width: 100%;
    margin-bottom: 15px;
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
                  let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);

                  setLinks([
                    {
                      id: uniqueId,
                      url,
                      name,
                      vote: 0,
                      date: Date.now(),
                    },
                    ...links,
                  ]);

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
