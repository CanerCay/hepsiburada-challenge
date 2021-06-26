import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Helmet from "react-helmet";
import {ToastContainer} from "react-toastify";

import NoFound from '../NoFound/loadable';
import LinkList from '../LinkList/loadable';
import AddNewLink from "../AddNewLink/loadable";
import GlobalStyle from "../../theme/globalStyle";
import light from "../../theme/light";
import ThemePopup from "../../components/Shared/ThemePopup";
import LinkProvider from "../../contexts/LinkProvider";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [theme, setTheme] = useState(light);
  return (
    <>
      <Helmet>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <ThemeProvider theme={theme}>
        <LinkProvider>
          <ThemePopup setTheme={setTheme}/>
          <GlobalStyle/>
          <ToastContainer />
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/" exact children={<LinkList/>}/>
              <Route path="/add-link" exact children={<AddNewLink/>}/>
              <Route path="/not-found" children={<NoFound/>}/>
              <Route path="*" children={<NoFound/>}/>
            </Switch>
          </Router>
        </LinkProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
