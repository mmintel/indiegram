const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allDatoCmsPost {
          edges {
            node {
              id: originalId
            }
          }
        }
      }
    `,
  );
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
  }

  result.data.allDatoCmsPost.edges.forEach((edge) => {
    const { node } = edge;
    createPage({
      path: `/post/${node.id}`,
      component: path.resolve(__dirname, './src/templates/post.js'),
      context: {
        id: node.id,
      },
    });
  });
};
