import { Observable, of } from 'rxjs';

export class MockHttpClient {
    constructor(public returnData: any) { }

    get(): Observable<any> {
        return of(this.returnData);
    }
}