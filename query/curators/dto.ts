export type GET_LIST_CURATOR_DTO = {
  getCurators: Array<{
    id: string;
    first_name: string;
    last_name: string;
    second_name: string;
    email: string;
    phone: string;
    role: string;
    district: {
      id: number;
      name: string;
    };
    citizen: Array<number>;
  }>;
};
