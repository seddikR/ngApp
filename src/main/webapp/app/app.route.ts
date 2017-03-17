import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component'


/* import { AuthService } from './shared';

@Injectable()
export class AuthorizeResolve implements Resolve<any> {

  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.authorize();
  }
} */

export const NavbarRoute: Routes = [
    { path: 'categories',
        component: CategoryComponent,


  },

    { path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
  ];
