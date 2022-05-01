import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FacadeService } from 'src/app/services/facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';
import { IComment } from 'src/app/interfaces/comment';
import { commentMockData } from 'src/assets/mock-data/mock-data-hacker-news';


describe('CommentComponent', () => {
  let component: CommentComponent;
  let facadeService: FacadeService;
  let fixture: ComponentFixture<CommentComponent>;
  const spy = jasmine.createSpyObj('FacadeService', ['getComment']);
  let helper;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [FacadeService],
    }).compileComponents();
    helper = new Helper();
  });

  beforeEach(inject([FacadeService], s => {
    facadeService = s;
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method should be called', () => {
    spyOn(component, 'getComment');
    fixture.detectChanges();
    expect(component.getComment).toHaveBeenCalled();
  });

  it("should call getUsers and return list of users", async(() => {
    let response: IComment = helper.getCommentMockData();
    spyOn(facadeService, 'getItem').and.returnValue(of(response))
    component = fixture.componentInstance;
    component.getComment('123');
    fixture.detectChanges();
    expect(component.story).toEqual(response);
  }));

});

export class Helper {
  getCommentMockData(): IComment {
    return commentMockData;
  }
}
