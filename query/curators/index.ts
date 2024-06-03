export const ADD_CURATOR = gql`
mutation ADD_CURATOR($data:CreateCuratorInput!){
  createCurator(createCuratorInput:$data){
    id
  }
}
`