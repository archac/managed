import { async, TestBed } from '@angular/core/testing';
import { NamesService } from './names.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxsModule, Store } from '@ngxs/store';
import { NamesState } from '../store/names.state';
import { NamesActions } from '../store/names.actions';

class MockHttpClient {
    get(): Observable<any> {
        return of([{ _id: '1234', name: 'test name' }]);
    }
}

describe('NamesService', () => {
    let service: NamesService;
    let store: Store;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxsModule.forRoot([NamesState])
            ],
            providers: [
                NamesService,
                { provide: HttpClient, useClass: MockHttpClient }
            ],
        });
    }));

    beforeEach(() => {
        service = TestBed.get(NamesService);
        store = TestBed.get(Store);
    });

    it('should be created', () => {
       expect(service).toBeTruthy();
    });

    it('should dispatch to update names in the state', () => {
        const storeSpy = spyOn(store, 'dispatch');
        service.getNames('test');
        expect(storeSpy).toHaveBeenCalledWith(new NamesActions.UpdateNames([{ _id: '1234', name: 'test name' }]));
    });


});
