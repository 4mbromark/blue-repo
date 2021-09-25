import { RoutingUrl } from './../../blue-routing/routing-url';
import { RoutingService } from './../routing.service';
import { UserService } from './../user.service';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../../blue-enum/word/config';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private routingService: RoutingService,
    private storage: StorageService
  ) {}

  intercept(req: HttpRequest<string>, next: HttpHandler) {
    const token: string = this.storage.get(Config.LOCAL_STORAGE_TOKEN);

    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const path = this.routingService.getUrl() as string;
          if (!path.includes(RoutingUrl.LOGIN_PAGE) && error.status === 401) {
            this.userService.logout();
          }

          return throwError(error);
        }
      )
    );
  }
}
