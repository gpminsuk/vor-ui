export type User = {
  email: string;
  publicAddress: string;
};

export type Event = {
  name: string;
  state: string;
  startedTime: string;
  endedTime: string;
  description: string;
  issuer: string;
};
