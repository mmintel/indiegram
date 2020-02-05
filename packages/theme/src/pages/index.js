import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Bootstrap, Container, Profile, Feed, Layout,
} from '@mmintel/indiegram';

const Home = ({ data }) => (
  <Layout>
    <Container>
      <Bootstrap />
      <Profile
        avatar={`${data.feed.avatar.url}?w=256&h=256&fit=face`}
        username={data.feed.username}
        name={data.feed.name}
        description={data.feed.description}
        website={data.feed.website}
        postsCount={data.posts.totalCount}
      />
      <Feed posts={data.posts.edges} />
    </Container>
  </Layout>
);

Home.propTypes = {
  data: PropTypes.shape({
    feed: PropTypes.shape({
      username: PropTypes.string,
      name: PropTypes.string,
      website: PropTypes.string,
      description: PropTypes.string,
      avatar: PropTypes.object,
    }),
    posts: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          caption: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export const query = graphql`
  query IndexQuery {
    feed: datoCmsFeed {
      username
      name
      website
      description
      avatar {
        url
      }
    }
    posts: allDatoCmsPost {
      totalCount
      edges {
        node {
          id
          caption
          media {
            url
          }
        }
      }
    }
  }
`;

export default Home;
