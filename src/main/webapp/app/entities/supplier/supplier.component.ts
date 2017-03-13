import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, AlertService } from 'ng-jhipster';

import { Supplier } from './supplier.model';
import { SupplierService } from './supplier.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-supplier',
    templateUrl: './supplier.component.html'
})
export class SupplierComponent implements OnInit, OnDestroy {
suppliers: Supplier[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private supplierService: SupplierService,
        private alertService: AlertService,
        private eventManager: EventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.supplierService.query().subscribe(
            (res: Response) => {
                this.suppliers = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInSuppliers();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId (index: number, item: Supplier) {
        return item.id;
    }



    registerChangeInSuppliers() {
        this.eventSubscriber = this.eventManager.subscribe('supplierListModification', (response) => this.loadAll());
    }


    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}
