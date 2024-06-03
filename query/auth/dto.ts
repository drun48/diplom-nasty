export type loginDTO = {
  login: {
    access_token: string;
    curator: {
      role: string;
      email: string;
    };
  };
};
