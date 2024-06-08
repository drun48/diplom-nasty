export type loginDTO = {
  login: {
    access_token: string;
    curator: {
      id: string;
      role: string;
      email: string;
    };
  };
};
