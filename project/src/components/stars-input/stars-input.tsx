import { Status } from '../../constants';

type StarsInputProps = {
  name: string;
  starId: number;
  value: number;
  postStatus: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function StarsInput({ onChange, starId, name, value, postStatus }: StarsInputProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${starId}`}
        type="radio"
        name="rating"
        value={starId}
        onChange={onChange}
        checked={starId === Number(value)}
        disabled={postStatus === Status.Loading}
      />
      <label className="rating__label" htmlFor={`star-${starId}`}>{name}</label>
    </>
  );
}

export default StarsInput;
