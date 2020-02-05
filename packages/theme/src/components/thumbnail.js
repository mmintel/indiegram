import React from 'react';
import PropTypes from 'prop-types';
import { Img } from '@mmintel/indiegram';

const Thumbnail = ({ post }) => (
  <div>
    {post.media && (
      <Img src={`${post.media[0].url}?w=512&h=512&fit=crop`} alt="" />
    )}
  </div>
);

Thumbnail.propTypes = {
  post: PropTypes.shape({
    caption: PropTypes.string,
    media: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  }).isRequired,
};

export default Thumbnail;
