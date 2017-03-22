/**
 * Created by sramdani on 3/14/2017.
 */

import { Component } from '@angular/core';


@Component({
    selector: 'jhi-main',
    template: `
  <h1>Product Management</h1>
<!--  <nav>
        <a routerLink="/categories" routerLinkActive="active">CATEGORIES</a>
  </nav>-->

  <div class="container-fluid">
    <div class="card">
        <router-outlet></router-outlet>
        <router-outlet name="popup"></router-outlet>
    </div>
  </div>
  
 <div class="footer">
    <p>This is your footer</p>
</div>
<template ngbModalContainer></template>
  
  
  
  
`




})
export class AppComponent {
    title = 'Minimal NgModule';
}

