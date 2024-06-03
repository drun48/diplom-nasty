export const LOGIN = gql`
  mutation LOGIN($data: LoginAccountInput!) {
    login(input: $data) {
      access_token
      curator {
        first_name
        last_name
        second_name
        role
        email
      }
    }
  }
`;
