import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

const RootWrapper = ({ element }) => (
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>
);

RootWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export const wrapRootElement = RootWrapper;
