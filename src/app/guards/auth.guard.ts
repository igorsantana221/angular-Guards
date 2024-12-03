import { CanActivateFn } from '@angular/router';
import { AsyncLocalStorage } from 'async_hooks';

export const authGuard: CanActivateFn = (route, state) => {

  const hasToken = !!localStorage.getItem('token')
  alert(hasToken)
  return hasToken;

}
;
