import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { PaginationUtil } from 'ng-jhipster';

import { CategoryComponent } from './category.component';
import {CategoryPopupComponent} from './category-dialog.component'





export const categoryRoute: Routes = [
  {
    path: 'category',
    component: CategoryComponent,
    data: {
        pageTitle: 'Categories'
    }
  }

];

export const categoryPopupRoute: Routes = [

    {
        path: 'category-new',
        component: CategoryPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Categories'
        },
        outlet: 'popup'
    }

];
