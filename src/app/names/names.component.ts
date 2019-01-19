import { Component, OnInit } from '@angular/core';
import { NamesService } from './services/names.service';
import { Select } from '@ngxs/store';
import { NamesState } from './store/names.state';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Name } from './store/names.model';

@Component({
  selector: 'app-names',
  styleUrls: ['./names.component.css'],
  template: `
    <div class="names-container">
      <input type="text" placeholder="Search for a name..." [(ngModel)]="criteria" (keyup)="keyUp.next()">
      <ul class="names-container__list">
        <li class="names-container__list__item" *ngFor="let name of names$ | async">{{ name.name }}</li>
      </ul>
    </div>
  `,
})
export class NamesComponent implements OnInit {

  @Select(NamesState.getNames) names$: Observable<Name[]>;

  criteria = '';
  keyUp = new Subject<string>();

  constructor(
    private namesService: NamesService
  ) {
  }

  ngOnInit() {
    // Setup the observable that will call the search with a
    // delay after the user has stopped typing
    this.keyUp.pipe(
      debounceTime(500)
    ).subscribe(() => {
      this.filter(this.criteria);
    });

    // do an initial search
    this.filter(this.criteria);
  }

  filter(criteria: string) {
    this.namesService.getNames(criteria);
  }

}
