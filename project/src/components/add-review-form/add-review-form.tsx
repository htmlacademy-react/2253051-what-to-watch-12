import { useParams } from 'react-router-dom';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postMovieReview } from '../../store/api-actions';
import { getReviewStatus } from '../../store/film/selectors';
import StarsInput from '../../components/stars-input/stars-input';
import { STARS, Status } from '../../constants';

function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const movieId = Number(useParams().id);
  const postStatus = useAppSelector(getReviewStatus);
  const minCharacters = 50;
  const maxCharacters = 400;
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    movieId
  });

  function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(postMovieReview(formData));
  }

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars" >
          {STARS.map((star) => (
            <StarsInput key={star.id} name={star.name} starId={star.id} value={formData.rating} onChange={handleChange} postStatus={postStatus}/>
          ))}
        </div>
      </div>

      <div className="add-review__text" style={{ background: 'rgb(255 255 255 / 26%)' }}>
        <textarea className="add-review__textarea" id="comment"
          name="comment" value={formData.comment}
          onChange={handleChange}
          disabled={postStatus === Status.Loading}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit"
            disabled={(formData.comment.length <= 50 ||
              formData.rating === 0 || formData.comment.length >= 400 || postStatus === Status.Loading
            )}
          >{postStatus === Status.Loading ? 'Loading' : 'Post'}
          </button>
        </div>
      </div>
      <p className="reviews__description">
        To post review please make sure to set <b>rating </b>
        and describe the film with at least <b>{minCharacters} characters</b>.
        {(formData.comment && formData.comment.length < minCharacters + 1) && <b> Сharacters left: {minCharacters + 1 - formData.comment.length}</b>}
        {(formData.comment && formData.comment.length >= maxCharacters) && <b > Max {maxCharacters} Сharacters</b>}
      </p>
      {postStatus === Status.Failed && <p>Something gooing wrong...</p>}
    </form>
  );
}

export default AddReviewForm;
