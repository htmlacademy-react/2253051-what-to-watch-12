import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import SignIn from '../../pages/sign-in/sign-in';
import { AppRoute } from '../../constants';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Review}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<Film />}>
          <Route path={AppRoute.Info} element={<Film />} />
        </Route>
        <Route path={AppRoute.NotFoundPage} element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
