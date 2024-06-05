export const ADD_TASK = gql`
  mutation ADD_TASK($data: CreateTaskInput!) {
    createTask(CreateTaskInput: $data) {
      id
    }
  }
`;
