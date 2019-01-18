import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Name } from '../store/names.model';
import { Store } from '@ngxs/store';
import { NamesActions } from '../store/names.actions';


@Injectable()
export class NamesService {
    constructor(
        private http: HttpClient,
        private store: Store
    ) { }

    getNames(criteria: string) {
        const params = new HttpParams().set('criteria', criteria);
        this.http.get<Name[]>('http://localhost:8080/names', { params: params })
            .subscribe((names: Name[]) => {
                this.store.dispatch(new NamesActions.UpdateNames(names));
            });
    }
}
