export interface User {
  uid: string;
  username: string;
  askUsername: boolean;
  profileImage: Image;
  profileImageId: string;
  isPremium: boolean;
  isAdmin: boolean;
  dateCreated: Date;
  dateUpdated: Date;
  xp: number;
  startedTours: StartedTour[];
  coupons: Coupon[];
  favoriteTours: FavoriteTour[];
}

export interface Level {
  id: string;
  name: string;
  description: string;
  xp: number;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  dateCreated: Date;
  dateUpdated: Date;
  coupons: Coupon[];
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  dateCreated: Date;
  dateUpdated: Date;
  company: Company;
  companyId: string;
  user: User;
  userId: string;
}

export interface FavoriteTour {
  id: string;
  dateCreated: Date;
  dateUpdated: Date;
  tourId: string;
  tour: Tour;
  userId: string;
  user: User;
}

export interface StartedTour {
  id: string;
  isCompleted: boolean;
  dateStarted: Date;
  dateEnded: Date;
  tourId: string;
  tour: Tour;
  userId: string;
  user: User;
}

export interface Continent {
  id: string;
  name: string;
  countries: Country[];
}

export interface Country {
  id: string;
  name: string;
  continentId: string;
  continent: Continent;
  cities: City[];
}

export interface City {
  id: string;
  name: string;
  countryId: string;
  country: Country;
  tours: Tour[];
}

export interface TourPoint {
  id: string;
  longitude: number;
  latitude: number;
  description: string;
  dateCreated: Date;
  dateUpdated: Date;
  tour: Tour;
  tourId: string;
}

export interface Tour {
  id: string;
  name: string;
  description: string;
  tourPoints: TourPoint[];
  image: Image;
  imageId: string;
  dateCreated: Date;
  dateUpdated: Date;
  xp: number;
  startedTours: StartedTour[];
  city: City;
  cityId: string;
  favoriteTours: FavoriteTour[];
}

export interface News {
  id: string;
  title: string;
  description: string;
  dateCreated: Date;
  dateUpdated: Date;
  image: Image;
  imageId: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  dateCreated: Date;
  dateUpdated: Date;
  image: Image;
  imageId: string;
}

export interface Image {
  id: string;
  url: string;
  name: string;
  dateCreated: Date;
  dateUpdated: Date;
  tours: Tour[];
  users: User[];
  news: [];
  achievements: Achievement[];
}
