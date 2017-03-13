import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { SupplierDetailComponent } from '../../../../../../main/webapp/app/entities/supplier/supplier-detail.component';
import { SupplierService } from '../../../../../../main/webapp/app/entities/supplier/supplier.service';
import { Supplier } from '../../../../../../main/webapp/app/entities/supplier/supplier.model';

describe('Component Tests', () => {

    describe('Supplier Management Detail Component', () => {
        let comp: SupplierDetailComponent;
        let fixture: ComponentFixture<SupplierDetailComponent>;
        let service: SupplierService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [SupplierDetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    SupplierService
                ]
            }).overrideComponent(SupplierDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SupplierDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SupplierService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new Supplier(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.supplier).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
