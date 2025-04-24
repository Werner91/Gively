export interface FilterOptions {
  ageGroup: string;
  gender: string;
  priceRange: { min: number; max: number };
  giftType: string;
  deliverableUntil: Date | null;
}