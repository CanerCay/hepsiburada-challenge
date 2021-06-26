import React, {useState} from 'react';
import Helmet from "react-helmet";
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import {toast} from "react-toastify";

import Header from "../../components/Shared/Header";
import {LinkContext} from "../../contexts/LinkProvider";
import Input from "../../components/Input";
import Button from "../../components/Button";
import validURL from "../../helpers/checkLink";

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
  
  .error {
    font-size: 0.7em;
    color: var(--red);
    margin-top: -10px;
    margin-bottom: 15px;
  }
`;

const AddNewLink = () => {
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const [errorText, setErrorText] = useState({
    name: '',
    url: '',
  });
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
            <Input
              placeholder='Link Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="20"
            />
            {
              errorText.name && (
                <p className='error'>{errorText.name}</p>
              )
            }
            <Input
              placeholder='Link URL'
              value={url}
              onChange={(e) => setURL(e.target.value)}
              maxLength="30"
            />
            {
              errorText.url && (
                <p className='error'>{errorText.url}</p>
              )
            }

            <Button
              onClick={() => {
                if (!name.trim().length || !url.trim().length || !validURL(url)) {
                  setErrorText({
                    name: !name.trim().length ? 'Name is required' : '',
                    url: !url.trim().length ? 'URL is required': !validURL(url) ? 'Please enter a valid url' : '',
                  });

                  return;
                } else {
                  setErrorText({
                    name: '',
                    url: '',
                  })
                }


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

                toast.success(`Successfully added ${name}`, {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });

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
