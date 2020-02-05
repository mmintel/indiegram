import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Container, Profile, Feed, Layout, Dialog, Detail, Card,
} from '@mmintel/indiegram';

const Home = ({ data }) => {
  const [detail, setDetail] = React.useState(null);

  React.useEffect(() => {
    if (detail && window.location.pathname === '/') {
      window.history.replaceState(null, null, `post/${detail.id}`);
    } else if (detail === false && window.location.pathname !== '/') {
      window.history.replaceState(null, null, '/');
    }
  }, [detail]);

  const user = {
    avatar: data.feed.avatar.url,
    username: data.feed.username,
    name: data.feed.name,
    description: data.feed.description,
    website: data.feed.website,
  };

  return (
    <Layout>
      <Container>
        <Profile
          user={user}
          postsCount={data.posts.totalCount}
        />
        <Feed posts={data.posts.edges} onSelect={(post) => setDetail(post)} />
        <Dialog isOpen={!!detail} onClose={() => setDetail(false)}>
          { detail && (
            <Card>
              <Detail post={detail} user={user} />
            </Card>
          )}
        </Dialog>
      </Container>
    </Layout>
  );
};

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
      edges: PropTypes.array,
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
          id: originalId
          caption
          location
          media {
            url
          }
        }
      }
    }
  }
`;

export default Home;
