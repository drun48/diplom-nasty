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

export const GET_LIST_CITIZEN= gql`
  query GET_LIST_CITIZEN {
    getCitizens {
      id
      first_name
      last_name
      second_name
      email
      inn
      category
      organizationName
      phone
    }
  }
`;