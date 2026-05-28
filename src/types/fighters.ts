import type { Social } from "@/types/social";

export interface Player {
  id: string;
  name: string;
  realName: string;
  age: number;
  country: string;
  city: string;
  neighborhood: string;
  preferredFoot: string;
  team: string;
  position: string;
  number: number;
  bio: string;
  socials: Social[];
}
