import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Name } from '../store/names.model';
import { Store } from '@ngxs/store';
import { NamesActions } from '../store/names.actions';
import { ConfigService } from 'src/app/shared/config.service';


@Injectable()
export class NamesService {
    constructor(
        private http: HttpClient,
        private configService: ConfigService,
        private store: Store
    ) { }

    getNames(criteria: string) {
        this.configService.loadConfig().subscribe((config) => {
            const params = new HttpParams().set('criteria', criteria);
            const endpoint = config.endpoint;
            const path = config.paths['names'];
            this.http.get<Name[]>(`${endpoint}${path}`, { params: params })
            .subscribe((names: Name[]) => {
                this.store.dispatch(new NamesActions.UpdateNames(names));
            });
        });
    }
}
