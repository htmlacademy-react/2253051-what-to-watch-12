import { memo } from 'react';
import { ReviewProps } from '../../types/review/review';

type Props = {
  review: ReviewProps;
}

function Review({ review }: Props) {
  const date = new Date(review.date);
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const year = date.getFullYear();
  const day = date.getDay();

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment} </p>
        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">
            {`${month} ${day}, ${year}`}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default memo(Review);
