import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService } from 'ng-jhipster';

import { Supplier } from './supplier.model';
import { SupplierPopupService } from './supplier-popup.service';
import { SupplierService } from './supplier.service';
import { Address, AddressService } from '../address';
import { Product, ProductService } from '../product';
@Component({
    selector: 'jhi-supplier-dialog',
    templateUrl: './supplier-dialog.component.html'
})
export class SupplierDialogComponent implements OnInit {

    supplier: Supplier;
    authorities: any[];
    isSaving: boolean;

    addresses: Address[];

    products: Product[];
    constructor(
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private supplierService: SupplierService,
        private addressService: AddressService,
        private productService: ProductService,
        private eventManager: EventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.addressService.query().subscribe(
            (res: Response) => { this.addresses = res.json(); }, (res: Response) => this.onError(res.json()));
        this.productService.query().subscribe(
            (res: Response) => { this.products = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.supplier.id !== undefined) {
            this.supplierService.update(this.supplier)
                .subscribe((res: Supplier) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.supplierService.create(this.supplier)
                .subscribe((res: Supplier) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Supplier) {
        this.eventManager.broadcast({ name: 'supplierListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }

    trackAddressById(index: number, item: Address) {
        return item.id;
    }

    trackProductById(index: number, item: Product) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-supplier-popup',
    template: ''
})
export class SupplierPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private supplierPopupService: SupplierPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.supplierPopupService
                    .open(SupplierDialogComponent, params['id']);
            } else {
                this.modalRef = this.supplierPopupService
                    .open(SupplierDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
