import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, DataUtils } from 'ng-jhipster';

import { Category } from './category.model';
import { CategoryPopupService } from './category-popup.service';
import { CategoryService } from './category.service';
//import { Product, ProductService } from '../product';
@Component({
    selector: 'jhi-category-dialog',
    templateUrl: './category-dialog.component.html'
})
export class CategoryDialogComponent implements OnInit {

    category: Category;
    authorities: any[];
    isSaving: boolean;

    //products: Product[];
    constructor(
        public activeModal: NgbActiveModal,
        //private dataUtils: DataUtils,
        //private alertService: AlertService,
        private categoryService: CategoryService,
        //private productService: ProductService,
        //private eventManager: EventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
/*        this.productService.query().subscribe(
            (res: Response) => { this.products = res.json(); }, (res: Response) => this.onError(res.json()));*/
    }
    byteSize(field) {
        //return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        //return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, category, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
/*            this.dataUtils.toBase64($file, (base64Data) => {
                category[field] = base64Data;
                category[`${field}ContentType`] = $file.type;
            });*/
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.category.id !== undefined) {
            this.categoryService.update(this.category)
                .subscribe((res: Category) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.categoryService.create(this.category)
                .subscribe((res: Category) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Category) {
        //this.eventManager.broadcast({ name: 'categoryListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        //this.alertService.error(error.message, null, null);
    }

/*    trackProductById(index: number, item: Product) {
        return item.id;
    }*/
}

@Component({
    selector: 'jhi-category-popup',
    template: ''
})
export class CategoryPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private categoryPopupService: CategoryPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.categoryPopupService
                    .open(CategoryDialogComponent, params['id']);
            } else {
                this.modalRef = this.categoryPopupService
                    .open(CategoryDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
