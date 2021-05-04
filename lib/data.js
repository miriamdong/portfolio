import { gql, GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHCMS_PROJECT_API;

const graphQLClient = new GraphQLClient(endpoint);

export const getPostsAndPortfolio = async () => {
  const query = gql`
    {
      portfolios(first: 1, orderBy: date_DESC) {
        title
        slug
        tags
        description
        date
        id
        content
        coverImage {
          url
          height
          width
        }
      }
      posts(first: 1, orderBy: date_DESC) {
        content
        date
        description
        id
        slug
        tags
        title
        image {
          height
          url
          width
        }
        author {
          name
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPortfolioItems = async () => {
  const query = gql`
    {
      portfolios(orderBy: date_DESC) {
        title
        slug
        tags
        description
        date
        id
        content
        coverImage {
          url
          height
          width
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPosts = async () => {
  const query = gql`
    {
      posts(orderBy: date_DESC) {
        title
        content
        date
        description
        id
        slug
        tags
        image {
          height
          url
          width
        }
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPortfolioItem = async (slug) => {
  const query = gql`
    query getPortfolio($slug: String!) {
      portfolios(where: { slug: $slug }) {
        title
        slug
        tags
        description
        date
        id
        content
        coverImage {
          url
          height
          width
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};

export const getPortfolioSlugs = async () => {
  const query = gql`
    {
      portfolios {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getBlogSlugs = async () => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        content
        date
        description
        id
        slug
        tags
        title
        image {
          height
          url
          width
        }
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};
