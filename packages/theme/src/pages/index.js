import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Container, Profile, Feed, Layout, Dialog, Detail, Card,
} from '@mmintel/gatsby-theme-indiegram';

const Home = ({ data }) => {
  const [detail, setDetail] = React.useState(null);

  const gotoPost = (post) => {
    setDetail(post);
    window.history.replaceState(null, null, `post/${post.id}`);
  };

  const goBack = () => {
    setDetail(false);
    if (window.location.pathname !== '/') {
      window.history.replaceState(null, null, '/');
    }
  };

  return (
    <Layout user={data.user}>
      <Container>
        <Profile
          user={data.user}
          postsCount={data.posts.totalCount}
        />
        <Feed posts={data.posts.edges} onSelect={gotoPost} />
        {data.posts.edges.map((post) => (
          <Dialog key={post.node.id} isOpen={detail && detail.id === post.node.id} onClose={goBack}>
            <Container small>
              <Card>
                <Detail post={post.node} user={data.user} />
              </Card>
            </Container>
          </Dialog>
        ))}
      </Container>
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
      name: PropTypes.string,
      website: PropTypes.string,
      description: PropTypes.string,
      avatar: PropTypes.object,
    }),
    posts: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const query = graphql`
  query IndexQuery {
    user: datoCmsFeed {
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

export default Home;
