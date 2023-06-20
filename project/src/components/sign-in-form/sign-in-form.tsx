import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getStatus } from '../../store/user/selectors';
import { Status } from '../../constants';
import { AuthData } from '../../types/auth-data';

type Props = {
  value: string;
  error: string;
  regex: RegExp;
  isValid: boolean;
  hasValue: boolean;
}

type FormProps = {
  [key: string]: Props;
}

function SignInForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getStatus);
  const [formValue, setFormValue] = useState<FormProps>({
    email: {
      value: '',
      isValid: false,
      error: 'Please enter a valid email address',
      regex: /[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
      hasValue: false,
    },
    password: {
      value: '',
      isValid: false,
      error: 'At least one letter and number',
      regex: /\d+[a-zA-Z]+|[a-zA-Z]+\d+/,
      hasValue: false,
    },
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const isValid = formValue[name].regex.test(value);
    const hasValue = !!value.trim();

    setFormValue({
      ...formValue,
      [name]: { ...formValue[name], value, isValid, hasValue },
    });
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({
      login: formValue.email.value,
      password: formValue.password.value
    });
  }

  return (
    <form action="#" className="sign-in__form" onSubmit={handleSubmit} noValidate>
      {!formValue.email.isValid && formValue.email.hasValue &&
        <div className="sign-in__message">
          <p>{formValue.email.error}</p>
        </div>}
      {!formValue.password.isValid && formValue.password.hasValue &&
        <div className="sign-in__message">
          <p>{formValue.password.error}</p>
        </div>}
      <div className="sign-in__fields">
        <div className={!formValue.email.isValid && formValue.email.hasValue ? 'sign-in__fields sign-in__field--error' : 'sign-in__fields'}>
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="email"
            id="email"
            minLength={1}
            required
            onChange={handleChange}
            value={formValue.email.value || ''}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="email"
          >
            Email address
          </label>
        </div>
        <div className={!formValue.password.isValid && formValue.password.hasValue ? 'sign-in__fields sign-in__field--error' : 'sign-in__fields'}>
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            minLength={2}
            required
            onChange={handleChange}
            value={formValue.password.value || ''}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="password"
          >
            Password
          </label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit"
          disabled={!(formValue.email.isValid && formValue.password.isValid) || loginStatus === Status.Loading || loginStatus === Status.Failed}
        >
          {loginStatus === Status.Loading ? 'Loading..' : 'Sign in'}
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
