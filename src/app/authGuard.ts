import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard {
  constructor(private userService: UserService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = await this.userService.fetchUser();
    if (user) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
