import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from './supplier.model';
import { SupplierService } from './supplier.service';

@Component({
    selector: 'jhi-supplier-detail',
    templateUrl: './supplier-detail.component.html'
})
export class SupplierDetailComponent implements OnInit, OnDestroy {

    supplier: Supplier;
    private subscription: any;

    constructor(
        private supplierService: SupplierService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.supplierService.find(id).subscribe(supplier => {
            this.supplier = supplier;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
