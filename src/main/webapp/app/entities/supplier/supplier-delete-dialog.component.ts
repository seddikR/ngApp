import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from 'ng-jhipster';

import { Supplier } from './supplier.model';
import { SupplierPopupService } from './supplier-popup.service';
import { SupplierService } from './supplier.service';

@Component({
    selector: 'jhi-supplier-delete-dialog',
    templateUrl: './supplier-delete-dialog.component.html'
})
export class SupplierDeleteDialogComponent {

    supplier: Supplier;

    constructor(
        private supplierService: SupplierService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.supplierService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'supplierListModification',
                content: 'Deleted an supplier'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-supplier-delete-popup',
    template: ''
})
export class SupplierDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private supplierPopupService: SupplierPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.supplierPopupService
                .open(SupplierDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
