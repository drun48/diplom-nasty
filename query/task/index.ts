export const ADD_TASK = gql`
  mutation ADD_TASK($data: CreateTaskInput!) {
    createTask(CreateTaskInput: $data) {
      id
    }
  }
`;

export const GET_LIST_TASK = gql`
  query {
    getTasks {
      id
      description
      dateStart
      dateEnd
      activityId
    }
  }
`;

export const GET_TASK = gql`
  query GET_TASK($id: Float!) {
    getTask(id: $id) {
      id
      description
      dateStart
      dateEnd
      activityId
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UPDATE_TASK($id: Float!, $data: UpdateTaskInput!) {
    updateTask(id: $id, updateTask: $data) {
      id
    }
  }
`;
