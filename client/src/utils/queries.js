import gql from "graphql-tag";

export const GET_ME = gql`
  query {
    me {
      _id
      username
      email
    }
  }
`;

export const GET_EVERYONE = gql`
query {
  getAllUsers {
    _id
    username
    email
  }
}
`;

export const GET_ONE_ANSWER = gql`
  query {
    getSingleSphericle($_id: ID!) {
      getSingleSphericle(_id: $id) {
        text
        category
        voteCount
      }
    }
  }
`;

export const GET_BY_CATEGORY = gql`
  query {
    getByCategory($category: String!) {
      getByCategory(category: $category) {
        text
        category
        voteCount
      }
    }
  }
`;