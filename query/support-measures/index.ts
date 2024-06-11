export const GET_LIST_SUPPORT_MEASURE = gql`
  query {
    getsSupportMeasures {
      id
      value
    }
  }
`;

export const ADD_SUPPORT_MEASURE = gql`
  mutation ADD_SUPPORT_MEASURE($data: CreateSupportMeasuresInput!) {
    createSupportMeasures(input: $data) {
      id
    }
  }
`;
