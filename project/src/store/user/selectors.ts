import { NameSpace } from '../../constants';
import { State } from '../../types/state';
import { UserData } from '../../types/user/user';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.User].AuthorizationStatus;
export const getStatus = (state: State): string => state[NameSpace.User].status;
export const getUserInformations = (state: State): UserData | null => state[NameSpace.User].userInformation;
