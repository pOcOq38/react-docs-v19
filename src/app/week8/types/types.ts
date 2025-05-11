export type Place = {
  id: number;
  title: string;
  childIds: number[];
};

export type TravelPlan = {
  [key: number]: Place;
};
