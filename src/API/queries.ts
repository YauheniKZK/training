import type { DocumentNode } from "graphql";
import gql from "graphql-tag";


const user_profile_query = gql`query {
    viewer {
      currentUser {
        id
        displayName
        firstName
        lastName
        language
        email
      }
    }
  }`

const login_mutation = gql`mutation CreateUserTokenFromEmailPassword(
    $email: String!
    $password: String!
    $intent: ViewerIntent!
  ) {
    createUserToken: createUserTokenFromEmailPassword(
      email: $email
      password: $password
      intent: $intent
    ) {
      successful
      messages {
        message
        code
        field
      }
      result {
        accessToken
        refreshToken
      }
      messages {
        code
        message
        field
      }
    }
  }`

export { user_profile_query, login_mutation }