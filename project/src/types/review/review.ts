export type ReviewProps = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type CommentType = {
  rating: number;
  comment: string;
  movieId: number;
}
