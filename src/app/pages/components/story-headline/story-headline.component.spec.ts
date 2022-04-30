import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryHeadlineComponent } from './story-headline.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('StoryHeadlineComponent', () => {
  let component: StoryHeadlineComponent;
  let fixture: ComponentFixture<StoryHeadlineComponent>;

  let router = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [StoryHeadlineComponent],
      providers: [{ provide: Router, useValue: router }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
