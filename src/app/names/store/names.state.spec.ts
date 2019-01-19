import { async, TestBed } from '@angular/core/testing';

import { NgxsModule, Store } from '@ngxs/store';
import { NamesState } from './names.state';
import { NamesActions } from './names.actions';

describe('NamesState', () => {
  let store: Store;

  const testState = {
        names: [
            {
                _id: '1234',
                name: 'test name'
            }
        ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([NamesState])
      ],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
  });

  describe('selectors', () => {
    it('should get names', () => {
        expect(NamesState.getNames(testState)).toBe(testState.names);
      });
  });

  describe('actions', () => {
    it('should update the names', () => {
        store.dispatch(new NamesActions.UpdateNames([{_id: '1234', name: 'test name'}]));
        store.selectOnce(NamesState.getNames).subscribe(x => expect(x).toEqual([{_id: '1234', name: 'test name'}]));
    });
  });

});
