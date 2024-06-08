export const LOGIN = gql`
  mutation LOGIN($data: LoginAccountInput!) {
    login(input: $data) {
      access_token
      curator {
        id
        role
        email
      }
    }
  }
`;
