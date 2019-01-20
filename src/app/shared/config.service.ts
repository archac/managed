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

  private url = '../assets/config.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  loadConfig(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
