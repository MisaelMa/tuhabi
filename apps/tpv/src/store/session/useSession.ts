import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '..';
import { session } from './session.store';
export const useSession = () => {
  const user = useSelector((state: RootState) => state.session.user)
  const layout = useSelector((state: RootState) => state.session.isAuth ? 'session' : 'guest')
  const dispatch = useDispatch()

  const login = (payload: any) => {
    dispatch(session.actions.login({ ...payload }))
  }
  const logout = () => {
    dispatch(session.actions.logout())
  }
  const updatePicture = (url: string) => {
    dispatch(session.actions.updatePicture({ picture: url }))
  }
  return {
    login,
    logout,
    layout,
    user,
    updatePicture
  }
}
