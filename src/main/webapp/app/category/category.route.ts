import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { PaginationUtil } from 'ng-jhipster';

import { CategoryComponent } from './category.component';





export const categoryRoute: Routes = [
  {
    path: 'category',
    component: CategoryComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Categories'
    }
  }

];

export const categoryPopupRoute: Routes = [

];
