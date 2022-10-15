import { useAppSelector, useAppDispatch } from './redux';

import { setUser } from '../store/userSlice';

export const useAuth = () => {
  const user = useAppSelector(state => state.user);
  const token = localStorage.token as string;
  const dispatch = useAppDispatch();

  if (!user.token && token) {
    dispatch(setUser({ token }));
  }

  return {
    isAuth: Boolean(user.token),
    token: user.token,
  };
};
