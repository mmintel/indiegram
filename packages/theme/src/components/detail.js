import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Img, Display } from '@mmintel/indiegram';

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

const Detail = ({ post }) => (
  <StyledDetail>
    {post.media && (
      <DetailImage>
        <Img src={`${post.media[0].url}?w=1350&h=1080&fit=crop`} alt="" />
      </DetailImage>
    )}
    <DetailInfo>
      <Display as="p" ml={0} mr={0} mt={0} mb={0} size={-2}>
        {post.caption}
      </Display>
    </DetailInfo>
  </StyledDetail>
);

export default Detail;
