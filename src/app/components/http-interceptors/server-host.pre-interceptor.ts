import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServerHostPreInterceptor implements HttpInterceptor {
  private readonly serverHost: string;

  constructor() {
    this.serverHost = environment?.api?.serverHost || '';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({ url: this.serverHost + req.url }));
  }
}
