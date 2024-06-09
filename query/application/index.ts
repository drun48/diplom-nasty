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

export const CONFIRM_APPLICATIONS = gql`
  mutation CONFIRM_APPLICATIONS($id: Float!) {
    confirmActivity(id: $id) {
      confirm_date
    }
  }
`;

export const UPDATE_APPLICATIONS = gql`
  mutation UPDATE_APPLICATIONS($id: Float!, $data: UpdateActivityInput!) {
    updateActivity(id: $id, updateActivity: $data) {
      id
      comment
      end_date
      supportMeasures {
        id
        value
      }
    }
  }
`;
