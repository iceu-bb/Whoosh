import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { openModal } from '../modal/modalActionts';

export const UserIsAuthenticated = connectedReduxRedirect({
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: true,
  redirectPath: '/',
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
  redirectAction: newLoc => dispatch => {
    dispatch(openModal('UnauthModal'));
  }
});
