export type User = {
  email: string;
  publicAddress: string;
};

export type Event = {
  id: string;
  address: string;
  name: string;
  description: string;
  issuer: string;
  badges: Record<string, Badge[]>;
};

export type Badge = {
  tokenId: number;
  state: number;
  recipient: string;
  email: string;
  changedRecipient: string;
  name: string;
  description: string;
};
