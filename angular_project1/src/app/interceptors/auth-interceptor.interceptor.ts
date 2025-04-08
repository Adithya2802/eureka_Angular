import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('in authorise interceptor....')
  const myToken = 'ABCDEF123456'
  const requestWithToken = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myToken}`
    }
  });
  return next(requestWithToken);
};
