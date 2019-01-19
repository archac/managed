import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesComponent } from './names.component';
import { NamesService } from './services/names.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NgxsModule } from '@ngxs/store';
import { NamesState } from './store/names.state';

export class MockHttpClient {
    get(): Observable<any> {
        return of([{name: 'test name'}]);
    }
}

class MockNamesService {
  getNames(criteria: string) { }
}

describe('NamesComponent', () => {
  let component: NamesComponent;
  let fixture: ComponentFixture<NamesComponent>;
  let namesService: NamesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesComponent ],
      imports: [
        FormsModule,
        NgxsModule.forRoot([NamesState])
      ],
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: NamesService, useClass: MockNamesService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesComponent);
    component = fixture.componentInstance;
    namesService = TestBed.get(NamesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the filter names service', () => {
    const serviceSpy = spyOn(namesService, 'getNames');
    component.filter('ron');
    expect(serviceSpy).toHaveBeenCalledWith('ron');
  });
});
