import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserInformations } from '../../store/user/selectors';
import { logoutAction } from '../../store/api-actions';

type Props = {
  children?: JSX.Element;
}

function Header({ children }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(getUserInformations);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  function handleClick() {
    dispatch(logoutAction());
  }

  function handleListClick() {
    navigate(AppRoute.MyList);
  }

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar" onClick={handleListClick}>
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={AppRoute.Login} className="user-block__link" onClick={handleClick}>Sign out</Link>
          </li>
        </ul>
        :
        <div className="user-block">
          <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
        </div>}
    </header>
  );
}

export default memo(Header);
