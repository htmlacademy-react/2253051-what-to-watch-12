import { useAppSelector } from '../../hooks';
import Review from '../review/review';

function Reviews() {
  const reviews = useAppSelector((state) => state.review);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <Review review={review} key={review.id}/>
        ))}
      </div>
    </div>
  );
}
export default Reviews;
