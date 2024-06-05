export const ADD_TASK = gql`
  mutation ADD_TASK($data: CreateTaskInput!) {
    createTask(CreateTaskInput: $data) {
      id
    }
  }
`;


export const GET_LIST_TASK = gql`
query{
  getTasks{
    id,
    description,
    dateStart,
    dateEnd,
  }
}
`

export const UPDATE_TASK = gql`
  mutation UPDATE_TASK($id: Float!, $data: UpdateTaskInput!) {
    updateEvent(id: $id, updateTask: $data) {
      id
    }
  }
`;
