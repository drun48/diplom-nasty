export const ADD_EVENT = gql`
  mutation ADD_EVENT($data: CreateEventInput!) {
    createEvent(CreateEventInput: $data) {
      id
    }
  }
`;

export const GET_LIST_EVENT = gql`
  query GET_LIST_EVENT($curatorId: String) {
    getEvents(curatorId: $curatorId) {
      id
      name
      description
      dateStart
      dateEnd
    }
  }
`;

export const GET_EVENT = gql`
  query GET_EVENT($id: Float!) {
    getEvent(id: $id) {
      id
      name
      description
      dateStart
      dateEnd
      citizenOnEvent {
        citizenId
      }
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation UPDATE_EVENT($id: Float!, $data: UpdateEventInput!) {
    updateEvent(id: $id, update: $data) {
      id
    }
  }
`;
