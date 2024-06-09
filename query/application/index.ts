export const GET_LIST_APPLICATION_ID = gql`
  query {
    getActivitys {
      id
    }
  }
`;

export const GET_LIST_APPLICATION = gql`
  query GET_LIST_APPLICATION($curatorId: String!) {
    getActivitys(curatorId: $curatorId) {
      id
      comment
      request_date
      confirm_date
      end_date
      reaction
      citizen {
        first_name
        last_name
        second_name
        phone
      }
      supportMeasures {
        id
        value
      }
    }
  }
`;
