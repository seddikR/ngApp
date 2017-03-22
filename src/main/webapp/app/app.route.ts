
import { Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component'


export const NavbarRoute: Routes = [
    { path: 'categories',
        component: CategoryComponent,


  },

    { path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
  ];
