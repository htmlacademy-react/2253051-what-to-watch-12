import { Link, Navigate } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { useAppSelector } from '../../hooks';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import Footer from '../../components/footer/footer';
import { AppRoute, AuthorizationStatus } from '../../constants';

function SignIn(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={AppRoute.Main} />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <SignInForm />
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
