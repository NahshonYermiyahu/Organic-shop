import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth-service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}
  canActivate(): Promise <boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.authService.isAuth()) {
          resolve(true);
        } else {
          this.router.navigate(['/login']).then();
          resolve(false);
        }
      }, 1000);
    });
  }
}

@Injectable(
  {providedIn: 'root'}
)

export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return  true;
    }
    this.router.navigate(['/login']).then();
    return false;
  }
}
