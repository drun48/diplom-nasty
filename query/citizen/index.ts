export const GET_CITIZEN_LIST_NAME = gql`
  query GET_CITIZEN_LIST_NAME($curatorId: String) {
    getCitizens(curatorId: $curatorId) {
      id
      first_name
      last_name
      second_name
    }
  }
`;

export const GET_LIST_CITIZEN = gql`
  query GET_LIST_CITIZEN($curatorId: String) {
    getCitizens(curatorId: $curatorId) {
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

export const ADD_CITIZEN = gql`
  mutation ADD_CITIZEN($data: CreateCitizenInput!) {
    createCitizen(createCitizenInput: $data) {
      id
    }
  }
`;
