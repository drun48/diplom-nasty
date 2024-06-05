export const GET_CITIZEN_LIST_NAME = gql`
  query GET_CITIZEN_LIST_NAME {
    getCitizens {
      id
      first_name
      last_name
      second_name
    }
  }
`;
