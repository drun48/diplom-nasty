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
    description,
    dateStart,
    dateEnd,
  }
}
`