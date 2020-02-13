import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  Display,
} from '@mmintel/gatsby-theme-indiegram';
import withSpacing from '../hocs/with-spacing';

const StyledStats = styled.ul`
  display: flex;
`;

const StatsItem = styled.li`
  display: block;
  flex: 1;
`;

const Stats = ({ postsCount, ...props }) => (
  <StyledStats {...props}>
    <StatsItem>
      <Display bold size={-1}>{postsCount}</Display> <Display size={-1}>posts</Display>
    </StatsItem>
  </StyledStats>
);

Stats.defaultProps = {
  postsCount: 0,
};

Stats.propTypes = {
  postsCount: PropTypes.number,
};

export default withSpacing(Stats);
