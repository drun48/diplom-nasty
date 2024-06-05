export const ADD_CURATOR = gql`
  mutation ADD_CURATOR($data: CreateCuratorInput!) {
    createCurator(createCuratorInput: $data) {
      id
    }
  }
`;

export const GET_LIST_CURATOR = gql`
  query GET_LIST_CURATOR {
    getCurators {
      id
      first_name
      last_name
      second_name
      email
      phone
      role
      district {
        id
        name
      }
      citizen {
        id
      }
    }
  }
`;

export const GET_CURATOR_ID = gql`
  query GET_CURATOR_ID($data: GetCuratorArgs!) {
    getCuratorArgs(input: $data) {
      id
      first_name
      last_name
      second_name
      email
      phone
      role
      district {
        id
        name
      }
      citizen {
        id
      }
    }
  }
`;