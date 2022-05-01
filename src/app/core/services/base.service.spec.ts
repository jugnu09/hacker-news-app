import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.services';
import { of } from 'rxjs';

describe('BaseService', () => {
  let service: BaseService;
  let httpMock: HttpTestingController;
  const httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: httpClientMock },
      ]
    });
    service = TestBed.inject(BaseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get method and return an observable', ()=> {
    let mockUrl = '/url';
    service.get(mockUrl);
    httpClientMock.get.and.returnValue(of([]));
    let response =  service.get(mockUrl);
    expect(response).toBeDefined()
  })

  it('should call get method and return an observable', ()=> {
    let mockUrl = '/url';
    service.get(mockUrl);
    httpClientMock.get.and.returnValue(undefined);
    let response =  service.get(mockUrl);
    expect(response).not.toBeDefined()
  })
});
