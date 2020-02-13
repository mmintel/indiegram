import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  Avatar, Img, Display, TextLink, Stats,
} from '@mmintel/indiegram';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
`;

const ProfileAvatar = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-right: 1rem;
`;

const ProfileInformation = styled.div`
  flex: 2;
`;

const Profile = ({
  user, postsCount,
}) => {
  const {
    website, avatar, username, name, description,
  } = user;

  const shortWebsite = website && website.replace(/(^\w+:|^)\/\//, '');

  return (
    <StyledProfile>
      { avatar && (
        <ProfileAvatar>
          <Avatar>
            <Img src={`${avatar.url}?w=256&h=256&fit=face`} alt="" />
          </Avatar>
        </ProfileAvatar>
      )}
      <ProfileInformation>
        { username && (
          <Display size={2} as="h1">
            {username}
          </Display>
        )}
        <Stats postsCount={postsCount} mb={-1} mt={-1} />
        { name && (
          <Display bold size={-1}>{name}</Display>
        )}
        { description && (
          <Display size={-1} as="p">
            {description}
          </Display>
        )}
        { website && (
          <TextLink size={-1} bold as="a" href={website}>
            {shortWebsite}
          </TextLink>
        )}
      </ProfileInformation>
    </StyledProfile>
  );
};

Profile.defaultProps = {
  postsCount: 0,
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
    username: PropTypes.string,
    name: PropTypes.string,
    website: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  postsCount: PropTypes.number,
};

export default Profile;
