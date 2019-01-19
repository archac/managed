import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NamesState } from './names/store/names.state';
import { NamesService } from './names/services/names.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: NamesComponent },
  { path: '**', component: NamesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    ),
    NgxsModule.forRoot([
      NamesState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
