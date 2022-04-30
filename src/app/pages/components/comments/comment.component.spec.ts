import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { HackerNewsService } from '../../../services/hacker-news.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let hackerNewsServiceStub: Partial<HackerNewsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: HackerNewsService, useValue: hackerNewsServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method should be called', () => {
    spyOn(component, 'setStory'); 
    fixture.detectChanges(); // trigger ngOnInit here

    expect(component.setStory).toHaveBeenCalled(); 
});
});
