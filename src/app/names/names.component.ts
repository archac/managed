import { Component, OnInit } from '@angular/core';
import { NamesService } from './services/names.service';
import { Select } from '@ngxs/store';
import { NamesState } from './store/names.state';
import { Observable } from 'rxjs';
import { Name } from './store/names.model';

@Component({
  selector: 'app-names',
  styleUrls: ['./names.component.css'],
  template: `
    <h1> Names Works! </h1>
    <button (click)="filter()"> Test api </button>
    <ul>
      <li *ngFor="let name of names$ | async">{{ name.name }}</li>
    </ul>
  `,
})
export class NamesComponent implements OnInit {

  @Select(NamesState.getNames) names$: Observable<Name[]>;

  constructor(
    private namesService: NamesService
  ) { }

  ngOnInit() {
  }

  filter() {
    this.namesService.getNames('ron');
  }

}
