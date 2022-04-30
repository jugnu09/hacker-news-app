import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopStoriesComponent} from './top-stories.container.component';
import {HackerNewsService} from "../../services/hacker-news.service";

describe('TopStoriesComponent', () => {
  let component: TopStoriesComponent;
  let fixture: ComponentFixture<TopStoriesComponent>;
  let hackerNewsServiceStub: Partial<HackerNewsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopStoriesComponent],
      providers: [{ provide: HackerNewsService, useValue: hackerNewsServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
