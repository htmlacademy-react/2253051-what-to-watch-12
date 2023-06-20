import { AppRoute, AuthorizationStatus } from '../../constants';
import { Navigate } from 'react-router-dom';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

export default function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}
