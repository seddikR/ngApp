/**
 * Created by sramdani on 3/14/2017.
 */

import { Component } from '@angular/core';


@Component({
    selector: 'jhi-main',
    template: '<h1>{{title}}</h1>' +
    '<category></category>',
})
export class AppComponent {
    title = 'Minimal NgModule';
}

