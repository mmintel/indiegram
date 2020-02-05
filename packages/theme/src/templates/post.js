import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Layout } from '@mmintel/indiegram';

const Post = ({ data }) => {
  const post = data.posts.edges[0].node;
  return (
    <Layout>
      <Container>
        <div>{post.caption}</div>
      </Container>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          caption: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export default Post;

export const query = graphql`
  query postQuery($id: String!) {
    posts: allDatoCmsPost(filter:{ originalId: { eq: $id }}) {
      edges {
        node {
          caption
        }
      }
    }
  }
`;
