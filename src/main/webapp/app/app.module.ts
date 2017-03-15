import './vendor.ts';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgAppCategoryModule} from './category/category.module';

import { HttpModule } from '@angular/http';






@NgModule({
    imports: [
        BrowserModule,
        NgAppCategoryModule,
    ],
    declarations: [
        AppComponent
    ],

    exports: [ HttpModule],

    bootstrap: [ AppComponent  ]

    //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgAppAppModule {}
