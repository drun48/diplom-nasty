export const ADD_EVENT = gql`
mutation ADD_EVENT($data:CreateEventInput!){
    createEvent(CreateEventInput:$data){
        id
    }
}
`

export const GET_LIST_EVENT = gql`
query{
    getEvents{
        name,
        description,
        dateStart,
        dateEnd
    }
}`