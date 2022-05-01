import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { FacadeService } from './facade.service';

describe('FacadeService', () => {
  let service: FacadeService;
  let httpMock: HttpTestingController;
  const httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: httpClientMock },
      ]
    });
    service = TestBed.inject(FacadeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
