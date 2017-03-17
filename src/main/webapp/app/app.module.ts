import './vendor.ts';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgAppCategoryModule} from './category/category.module';

import { HttpModule } from '@angular/http';
import {NavbarRoute} from './app.route';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';





@NgModule({
    imports: [
        RouterModule.forRoot(NavbarRoute),
        BrowserModule,
        FormsModule,

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
