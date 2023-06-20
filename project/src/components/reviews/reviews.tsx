import { useAppSelector } from '../../hooks';
import { getALLReview, getALLReviewStatus } from '../../store/film/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import Review from '../review/review';

function Reviews() {
  const reviews = useAppSelector(getALLReview);
  const even = reviews.filter((rev) => rev.id % 2 === 0);
  const odd = reviews.filter((rev) => rev.id % 2 !== 0);
  const reviewsStatus = useAppSelector(getALLReviewStatus);

  return (
    <div className="film-card__reviews film-card__row">
      {reviewsStatus === 'Loading' ? <LoadingScreen /> :
        <>
          <div className="film-card__reviews-col">
            {odd.map((review) => (
              <Review review={review} key={review.id} />
            ))}
          </div>
          <div className="film-card__reviews-col">
            {even.map((review) => (
              <Review review={review} key={review.id} />
            ))}
          </div>
        </>}
    </div>
  );
}
export default Reviews;
