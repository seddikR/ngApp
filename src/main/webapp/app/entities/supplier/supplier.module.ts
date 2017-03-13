import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgAppSharedModule } from '../../shared';

import {
    SupplierService,
    SupplierPopupService,
    SupplierComponent,
    SupplierDetailComponent,
    SupplierDialogComponent,
    SupplierPopupComponent,
    SupplierDeletePopupComponent,
    SupplierDeleteDialogComponent,
    supplierRoute,
    supplierPopupRoute,
} from './';

let ENTITY_STATES = [
    ...supplierRoute,
    ...supplierPopupRoute,
];

@NgModule({
    imports: [
        NgAppSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        SupplierComponent,
        SupplierDetailComponent,
        SupplierDialogComponent,
        SupplierDeleteDialogComponent,
        SupplierPopupComponent,
        SupplierDeletePopupComponent,
    ],
    entryComponents: [
        SupplierComponent,
        SupplierDialogComponent,
        SupplierPopupComponent,
        SupplierDeleteDialogComponent,
        SupplierDeletePopupComponent,
    ],
    providers: [
        SupplierService,
        SupplierPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgAppSupplierModule {}
