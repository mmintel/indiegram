import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Img, Avatar, Display } from '@mmintel/gatsby-theme-indiegram';

const StyledComment = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spacing(0)};
`;

const Content = styled.div`
  margin-left: ${(props) => props.theme.spacing(0)};
`;

const Comment = ({ user, to, children }) => (
  <StyledComment>
    { to ? (
      <Link to={to}>
        <Avatar size="small">
          <Img src={user.avatar.url} alt="" />
        </Avatar>
      </Link>
    ) : (
      <Avatar size="small">
        <Img src={user.avatar.url} alt="" />
      </Avatar>
    )}
    <Content>
      { to ? (
        <Link to={to}>
          <Display as="h3" size={-2} bold>
            {user.username}
          </Display>
        </Link>
      ) : (
        <Display as="h3" size={-2} bold>
          {user.username}
        </Display>
      )}
      {children}
    </Content>
  </StyledComment>
);

Comment.defaultProps = {
  children: undefined,
  to: undefined,
};

Comment.propTypes = {
  to: PropTypes.string,
  user: PropTypes.shape({
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
    username: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};

export default Comment;
