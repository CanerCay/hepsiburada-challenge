import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from "react-router-dom";

import AddNewLink from './index';
import LinkProvider from "../../contexts/LinkProvider";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LinkProvider>
      <MemoryRouter>
        <AddNewLink/>
      </MemoryRouter>
    </LinkProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
