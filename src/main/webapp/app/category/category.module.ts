import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




import {
    CategoryService,
    CategoryPopupService,
    CategoryComponent,

    categoryRoute,
    categoryPopupRoute,
} from './';

let ENTITY_STATES = [
    ...categoryRoute,
    ...categoryPopupRoute,
];

@NgModule({
    imports: [
        RouterModule.forRoot(ENTITY_STATES, { useHash: true }),
        CommonModule
    ],
    declarations: [
        CategoryComponent
    ],
    entryComponents: [
        CategoryComponent
    ],
    exports: [CategoryComponent],
    providers: [
        CategoryService,
        CategoryPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgAppCategoryModule {}
