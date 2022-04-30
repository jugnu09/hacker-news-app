import { TestBed, async, inject } from '@angular/core/testing';

import { HackerNewsService } from './hacker-news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IStory } from '../interfaces/story';

describe('HackerNewsService', () => {
  let service: HackerNewsService;
  let httpMock: HttpTestingController;
  const httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: httpClientMock },
      ]
    });
    service = TestBed.inject(HackerNewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#fetchStory should fetch topstories from hackernews api', () => {
    const mockData: IStory = {
      by: 'rwr',
      descendants: 123,
      id: 1,
      kids: [],
      score: 5,
      time: 4,
      title: 'Mock title',
      type: 'Story',
      url: 'www.google.com'
    }
    const service: HackerNewsService = TestBed.inject(HackerNewsService);
    httpClientMock.get.and.returnValue(new Observable((o) => { o.next(mockData); }));
    service.getItem(123).subscribe((data) => {
      expect(data).toEqual(mockData);
    });
  });
});
