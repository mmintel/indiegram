import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail } from '@mmintel/indiegram';
import styled from '@emotion/styled';
import withSpacing from '../hocs/with-spacing';

const StyledFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1px;

  @media (min-width: 768px) {
    grid-gap: 1rem;
  }
`;

const Feed = ({ posts }) => (
  <StyledFeed>
    { posts.map((post) => (
      <div key={post.node.id}>
        <Thumbnail post={post.node} />
      </div>
    ))}
  </StyledFeed>
);

Feed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string,
    }),
  })).isRequired,
};

export default withSpacing(Feed);
