import { HttpInterceptorFn } from '@angular/common/http';

export const retryinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
