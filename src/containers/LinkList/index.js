import React, {useState} from 'react';
import Helmet from "react-helmet";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import {toast} from 'react-toastify';

import Header from "../../components/Shared/Header";
import Button from "../../components/Button";
import Select from "../../components/Select";

import {LinkContext} from "../../contexts/LinkProvider";
import {ORDER_BY_DATE, ORDER_BY_LIST, ORDER_BY_VOTE, PAGE_PER_VIEW} from "./constants";
import Icon from "../../components/Icon";
import Container from "./Container";
import StyledPopup from "../../components/Modal";

const Square = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 56px;
  width: 56px;
  font-size: 1.3em;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const LinkList = () => {
  const [activePage, setActivePage] = useState(0);
  const [removeLink, setRemoveLink] = useState('');
  const [orderBy, setOrderBy] = useState(ORDER_BY_DATE);

  return (
    <>
      <Helmet>
        <title>LinkList</title>
        <meta name="description" content="LinkList to HepsiBurada Interview Challenge"/>
      </Helmet>
      <Header/>
      <Container>
        <Link
          to='/add-link'
        >
          <Button block>
            Submit a Link
          </Button>
        </Link>
        <hr/>

        <LinkContext.Consumer>
          {({links, setLinks}) => {
            const pageCount = Math.ceil(links.length / PAGE_PER_VIEW);
            const pageBeginIndex = activePage * PAGE_PER_VIEW;
            const pageEndIndex = activePage * PAGE_PER_VIEW + PAGE_PER_VIEW > links.length ? links.length : activePage * PAGE_PER_VIEW + PAGE_PER_VIEW;

            return (
              <>
                {
                  links.length > 0 ? (
                    <Select
                      placeholder="Order By"
                      options={ORDER_BY_LIST}
                      value={orderBy}
                      onChange={setOrderBy}
                    />
                  ) : (
                    <p>You don't add any link yet.</p>
                  )
                }

                <ul className="link-list">
                  {links.sort((a, b) => {
                    if (orderBy === ORDER_BY_VOTE && b.vote !== a.vote) {
                      return b.vote - a.vote;
                    }

                    return b.date - a.date;
                  }).slice(pageBeginIndex, pageEndIndex).map((link) => (
                    <li key={link.id}>
                      <Square>
                        {link.vote}
                      </Square>
                      <div className="right__content">
                        <h3>{link.name}</h3>
                        <a href={link.url} target="_blank" rel="noreferrer">{link.url}</a>
                        <div className="vote">
                          <a
                            className="down"
                            onClick={() => {
                              setLinks([
                                ...links.map((l) => {
                                  if (l === link) {
                                    return {
                                      ...l,
                                      vote: l.vote - 1,
                                    }
                                  }

                                  return l;
                                }),
                              ]);
                            }}
                          >Down Vote</a>
                          <a
                            className="up"
                            onClick={() => {
                              setLinks([
                                ...links.map((l) => {
                                  if (l === link) {
                                    return {
                                      ...l,
                                      vote: l.vote + 1,
                                    }
                                  }

                                  return l;
                                }),
                              ]);
                            }}
                          >Up Vote</a>
                        </div>
                      </div>
                      <a
                        onClick={() => {
                          setRemoveLink(link);
                        }}
                        className="close"
                      >
                        <Icon name='close' color='#000'/>
                      </a>

                    </li>
                  ))}
                </ul>
                {
                  links.length > 0 && (
                    <ReactPaginate
                      previousLabel={'previous'}
                      nextLabel={'next'}
                      breakLabel={'...'}
                      onPageChange={({selected}) => {
                        setActivePage(selected);
                      }}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      breakClassName={'break'}
                      pageCount={pageCount}
                      containerClassName={'pagination'}
                      activeClassName={'active'}
                    />
                  )
                }

                <StyledPopup
                  open={!!removeLink}
                  closeOnDocumentClick
                  modal
                >
                  <>
                    <div className='body'>
                      <p>Do you want to remove ?</p>
                    </div>
                    <div className="footer">
                      <Button onClick={() => {
                        setLinks(links.filter((l) => l !== removeLink));

                        toast.success(`Successfully removed ${removeLink.name}`, {
                          position: "top-center",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });

                        setRemoveLink('');
                      }}>
                        Yes
                      </Button>

                      <Button onClick={() => {
                        setRemoveLink('');
                      }}>
                        No
                      </Button>
                    </div>
                  </>
                </StyledPopup>
              </>
            )
          }}
        </LinkContext.Consumer>
      </Container>
    </>
  );
};

export default LinkList;
