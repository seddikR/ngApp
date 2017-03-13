import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgAppAddressModule } from './address/address.module';
import { NgAppCategoryModule } from './category/category.module';
import { NgAppProductModule } from './product/product.module';
import { NgAppSupplierModule } from './supplier/supplier.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        NgAppAddressModule,
        NgAppCategoryModule,
        NgAppProductModule,
        NgAppSupplierModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgAppEntityModule {}
