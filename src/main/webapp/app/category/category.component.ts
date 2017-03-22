import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';


import { Category } from './category.model';
import { CategoryService } from './category.service';


@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
categories: Category[];


    constructor(
        private categoryService: CategoryService,


    ) {
    }

    loadAll() {
        this.categoryService.query().subscribe(
            (res: Response) => {
                this.categories = res.json();
            },

        );
    }
    ngOnInit() {
        this.loadAll();
    }



}
