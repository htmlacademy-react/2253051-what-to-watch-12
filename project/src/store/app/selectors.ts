import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const getGenre = (state: State): string => state[NameSpace.App].genre;
