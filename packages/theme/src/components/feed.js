import React from 'react';
import PropTypes from 'prop-types';
import {
  Thumbnail,
} from '@mmintel/indiegram';
import styled from '@emotion/styled';

const StyledFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1px;

  @media (min-width: 768px) {
    grid-gap: 1rem;
  }
`;

const Feed = ({ posts, onSelect }) => (
  <StyledFeed>
    { posts.map((post) => (
      <div key={post.node.id}>
        <Thumbnail post={post.node} onSelect={onSelect} />
      </div>
    ))}
  </StyledFeed>
);

Feed.defaultProps = {
  onSelect: () => {},
};

Feed.propTypes = {
  onSelect: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string,
    }),
  })).isRequired,
};

export default Feed;
