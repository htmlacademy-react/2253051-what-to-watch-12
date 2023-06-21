export enum AppRoute {
  Login = '/login',
  Main = '/',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
  MyList = '/mylist',
  NotFoundPage = '*',
  Info = ':info'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export function callRating(rating: number) {
  switch (true) {
    case rating >= 0 && rating <= 3:
      return 'Bad';
    case rating >= 3 && rating <= 5:
      return 'Normal';
    case rating >= 5 && rating <= 8:
      return 'Good';
    case rating >= 8 && rating <= 10:
      return 'Very good';
    case rating >= 10:
      return 'Awesome';
    default:
      return '';
  }
}

export const STARS = [
  { id: 10, name: 'Rating 10' },
  { id: 9, name: 'Rating 9' },
  { id: 8, name: 'Rating 8' },
  { id: 7, name: 'Rating 7' },
  { id: 6, name: 'Rating 6' },
  { id: 5, name: 'Rating 5' },
  { id: 4, name: 'Rating 4' },
  { id: 3, name: 'Rating 3' },
  { id: 2, name: 'Rating 2' },
  { id: 1, name: 'Rating 1' },
];

export const LINKS = [
  { id: 1, name: 'Overview' },
  { id: 2, name: 'Details' },
  { id: 3, name: 'Reviews' },
];

export enum APIRoute {
  Movies = '/films',
  Login = '/login',
  Logout = '/logout',
  Comment = '/comments',
  Promo = '/promo',
  Favorites = '/favorite'
}

export enum NameSpace {
  Film = 'FILM',
  Movies = 'Movies',
  User = 'USER',
  App = 'APP'
}

export enum Status {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}
