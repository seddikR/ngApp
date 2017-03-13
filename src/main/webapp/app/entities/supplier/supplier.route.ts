import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { SupplierComponent } from './supplier.component';
import { SupplierDetailComponent } from './supplier-detail.component';
import { SupplierPopupComponent } from './supplier-dialog.component';
import { SupplierDeletePopupComponent } from './supplier-delete-dialog.component';

import { Principal } from '../../shared';


export const supplierRoute: Routes = [
  {
    path: 'supplier',
    component: SupplierComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Suppliers'
    }
  }, {
    path: 'supplier/:id',
    component: SupplierDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Suppliers'
    }
  }
];

export const supplierPopupRoute: Routes = [
  {
    path: 'supplier-new',
    component: SupplierPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Suppliers'
    },
    outlet: 'popup'
  },
  {
    path: 'supplier/:id/edit',
    component: SupplierPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Suppliers'
    },
    outlet: 'popup'
  },
  {
    path: 'supplier/:id/delete',
    component: SupplierDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Suppliers'
    },
    outlet: 'popup'
  }
];
