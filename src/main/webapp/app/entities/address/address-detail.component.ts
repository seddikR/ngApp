import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from './address.model';
import { AddressService } from './address.service';

@Component({
    selector: 'jhi-address-detail',
    templateUrl: './address-detail.component.html'
})
export class AddressDetailComponent implements OnInit, OnDestroy {

    address: Address;
    private subscription: any;

    constructor(
        private addressService: AddressService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.addressService.find(id).subscribe(address => {
            this.address = address;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
