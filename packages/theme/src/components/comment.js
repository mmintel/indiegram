import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Img, Avatar, Display } from '@mmintel/indiegram';

const StyledComment = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spacing(0)};
`;

const Content = styled.div`
  margin-left: ${(props) => props.theme.spacing(0)};
`;

const Comment = ({ user, children }) => (
  <StyledComment>
    <Avatar size="small">
      <Img src={user.avatar} alt="" />
    </Avatar>
    <Content>
      <Display as="h3" size={-2} bold>
        {user.username}
      </Display>
      {children}
    </Content>
  </StyledComment>
);

Comment.defaultProps = {
  children: undefined,
};

Comment.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};

export default Comment;
