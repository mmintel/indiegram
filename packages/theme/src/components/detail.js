import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Img, Display, Comment } from '@mmintel/indiegram';

const StyledDetail = styled.div`
  display: flex;
  width: 100%;
  max-width: 815px;
`;

const DetailImage = styled.div`
  width: calc(100% / 3 * 2);
`;

const DetailInfo = styled.div`
  flex: 1;
`;

const DetailUser = styled.div`
  border-bottom: 1px solid #EFEFEF;
`;

const Detail = ({ user, post }) => (
  <StyledDetail>
    {post.media && (
    <DetailImage>
      <Img src={`${post.media[0].url}?w=1080&min-h=566&max-h=1350&fit=crop`} alt="" />
    </DetailImage>
    )}
    <DetailInfo>
      {user && (
      <DetailUser>
        <Comment user={user}>
          { post.location && (
            <Display size={-3}>{post.location}</Display>
          )}
        </Comment>
      </DetailUser>
      )}
      { post.caption && (
      <Comment user={user}>
        <Display as="p" size={-3}>
          {post.caption}
        </Display>
      </Comment>
      )}
    </DetailInfo>
  </StyledDetail>
);

Detail.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  post: PropTypes.shape({
    caption: PropTypes.string,
    location: PropTypes.string,
    media: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  }).isRequired,
};

export default Detail;
