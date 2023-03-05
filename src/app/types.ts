export type User = {
  email: string;
  publicAddress: string;
  awardedEvents: Event[];
  acceptedEvents: Event[];
};

export type Event = {
  id: string;
  address: string;
  name: string;
  description: string;
  issuer: string;
  badges: Record<string, Badge[]>;
  awardedBadges: Badge[];
  acceptedBadges: Badge[];
};

export type Badge = {
  tokenId: number;
  state: string;
  recipient: string;
  email: string;
  name: string;
  description: string;
  tokenURI: string;
};
