import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FacadeService } from 'src/app/services/facade.service';
import { IStory } from 'src/app/interfaces/story';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let httpClient: HttpClient;
  const spy = jasmine.createSpyObj('FacadeService', ['getComment']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [FacadeService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method should be called', () => {
    spyOn(component, 'getComment');
    fixture.detectChanges();
    expect(component.getComment).toHaveBeenCalled();
  });
});
