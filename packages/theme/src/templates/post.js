import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Card, Detail, Container, Layout,
} from '@mmintel/indiegram';

const Post = ({ data }) => {
  const post = data.posts.edges[0].node;
  return (
    <Layout user={data.user}>
      <Container small>
        <Card>
          <Detail post={post} user={data.user} />
        </Card>
      </Container>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
      name: PropTypes.string,
      website: PropTypes.string,
      description: PropTypes.string,
      avatar: PropTypes.object,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          caption: PropTypes.string,
          location: PropTypes.string,
          media: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
          })),
        }),
      })),
    }),
  }).isRequired,
};

export default Post;

export const query = graphql`
  query postQuery($id: String!) {
    user: datoCmsFeed {
      username
      name
      website
      description
      avatar {
        url
      }
    }
    posts: allDatoCmsPost(filter:{ originalId: { eq: $id }}) {
      edges {
        node {
          id: originalId
          caption
          location
          media {
            id: originalId
            url
          }
        }
      }
    }
  }
`;
