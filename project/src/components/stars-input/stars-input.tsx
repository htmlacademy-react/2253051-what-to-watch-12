type StarsInputProps = {
  name: string;
  starId: number;
  value: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function StarsInput({ onChange, starId, name, value }: StarsInputProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${starId}`} type="radio" name="rating" value={starId} onChange={onChange} checked={starId === Number(value)} />
      <label className="rating__label" htmlFor={`star-${starId}`}>{name}</label>
    </>
  );
}

export default StarsInput;
