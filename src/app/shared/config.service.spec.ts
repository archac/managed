import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

class MockHttpClient {
  get(): Observable<any> {
      return of(
        {
          endpoint: 'http://localhost:8080',
          paths: {
              names: '/names'
          }
        }
      );
  }
}

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        { provide: HttpClient, useClass: MockHttpClient }
    ],
    });
  });

  it('should be created', () => {
    service = TestBed.get(ConfigService);
    expect(service).toBeTruthy();
  });

  it('should load the config', () => {
    service.loadConfig().subscribe((config) => {
      expect(config.endpoint).toBeTruthy();
      expect(config.paths).toBeTruthy();
    });
  });
});
