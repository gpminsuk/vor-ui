export type User = {
  _id: string;
  email: string;
  publicAddress: string;
  awardedEvents: Event[];
  acceptedEvents: Event[];
};

export type Event = {
  organizer: string;
  id: string;
  address: string;
  name: string;
  description: string;
  issuer: string;
  url: string;
  badges: Record<string, Badge[]>;
  awardedBadges: Badge[];
  acceptedBadges: Badge[];
};

export type Badge = {
  group: string;
  tokenId: number;
  state: string;
  recipient: string;
  email: string;
  name: string;
  description: string;
  tokenURI: string;
  category: string;
};
