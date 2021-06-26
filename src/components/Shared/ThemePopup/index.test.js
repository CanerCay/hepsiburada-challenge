import {ThemeProvider} from "styled-components";
import React from "react";
import { render} from "@testing-library/react";

import ThemePopup from './index';
import light from "../../../theme/light";

const renderComponent = ({ theme, setTheme }) =>
  render(
    <ThemeProvider theme={theme}>
      <ThemePopup setTheme={setTheme} />
    </ThemeProvider>
  );

it('renders greeting', async () => {
  renderComponent({ theme: light, setTheme: () => {} });
});
