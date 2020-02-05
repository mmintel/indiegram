import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Display, TextLink } from '@mmintel/indiegram';

const StyledLayout = styled.div`
  padding-top: ${(props) => props.theme.spacing(2)};
  padding-bottom: ${(props) => props.theme.spacing(2)};
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing(3)};
`;

const Layout = ({ children }) => (
  <StyledLayout>
    {children}
    <Footer>
      <Display size={-2}>Powered by Indiegram. <TextLink size={-2} as="a" href="https://www.github.com/mmintel/indiegram">Create your own!</TextLink></Display>
    </Footer>
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
