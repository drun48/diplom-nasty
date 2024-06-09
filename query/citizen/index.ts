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

export const UPDATE_CITIZEN = gql`
  mutation UPDATE_CITIZEN($data: UpdateCitizenInput!, $id: Float!) {
    updateCitizen(update: $data, id: $id) {
      id
    }
  }
`;

export const GET_CITIZEN = gql`
  query GET_CITIZEN($id: Float) {
    getCitizen(id: $id) {
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
