import React from 'react';
import PropTypes from 'prop-types';
import { mdiCheckboxMultipleBlankOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Img } from '@mmintel/indiegram';
import styled from '@emotion/styled';

const StyledThumbnail = styled.div`
  position: relative;
`;

const MultipleIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const Thumbnail = ({ post, onSelect }) => (
  <StyledThumbnail onClick={() => onSelect(post)}>
    {post.media.length > 1 && (
      <MultipleIcon><Icon path={mdiCheckboxMultipleBlankOutline} size={0.5} color="#fff" /></MultipleIcon>
    )}
    {post.media && (
      <Img src={`${post.media[0].url}?w=512&h=512&fit=crop`} alt="" />
    )}
  </StyledThumbnail>
);

Thumbnail.defaultProps = {
  onSelect: () => {},
};

Thumbnail.propTypes = {
  onSelect: PropTypes.func,
  post: PropTypes.shape({
    caption: PropTypes.string,
    media: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  }).isRequired,
};

export default Thumbnail;
