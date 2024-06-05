export const ADD_EVENT = gql`
mutation ADD_EVENT($data:CreateEventInput!){
    createEvent(CreateEventInput:$data){
        id
    }
}
`