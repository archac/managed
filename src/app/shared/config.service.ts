import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  endpoint: string;
  paths: {};
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // Static path to the assets config file
  // this will never change unless the application structure
  // changes, so is ok to hard code here
  private url = '../assets/config.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  loadConfig(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
