import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';





import {
    CategoryService,
    CategoryPopupService,
    CategoryComponent,

    categoryRoute,
    categoryPopupRoute,

    CategoryDialogComponent,
    CategoryPopupComponent



} from './';

let ENTITY_STATES = [
    ...categoryRoute,
    ...categoryPopupRoute,
];

@NgModule({
    imports: [
        //RouterModule.forRoot(ENTITY_STATES, { useHash: true }),
        RouterModule.forRoot(categoryPopupRoute),
        CommonModule,
        FormsModule

    ],
    declarations: [
        CategoryComponent,
        CategoryDialogComponent,
        CategoryPopupComponent
    ],
    entryComponents: [
        CategoryComponent
    ],
    exports: [CategoryComponent],
    providers: [
        CategoryService,
        CategoryPopupService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgAppCategoryModule {}
