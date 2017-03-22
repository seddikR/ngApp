import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    CategoryService,
    CategoryPopupService,
    CategoryComponent,

    categoryPopupRoute,

    CategoryDialogComponent,
    CategoryPopupComponent

} from './';


@NgModule({
    imports: [

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
        CategoryComponent,
        CategoryDialogComponent
    ],
    exports: [CategoryComponent],
    providers: [
        CategoryService,
        CategoryPopupService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgAppCategoryModule {}
