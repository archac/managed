import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesComponent } from './names.component';
import { NamesService } from './services/names.service';

describe('NamesComponent', () => {
  let component: NamesComponent;
  let fixture: ComponentFixture<NamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesComponent ],
      providers: [ NamesService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the filter names service', () => {
    const serviceSpy = spyOn(component, <any>'namesService');
    component.filter('ron');
    expect(serviceSpy).toHaveBeenCalledWith('ron');
  });
});
