import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopStoriesComponent} from './top-stories.container.component';
import { FacadeService } from 'src/app/services/facade.service';
import { of } from 'rxjs';

describe('TopStoriesComponent', () => {
  let component: TopStoriesComponent;
  let fixture: ComponentFixture<TopStoriesComponent>;
  let facadeServiceStub: Partial<FacadeService>;
  const spy = jasmine.createSpyObj('FacadeService', ['getTopStories']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopStoriesComponent],
      providers: [
        { provide: FacadeService, useValue: spy }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize stories observable on', () => {
    let expectedData: [] = [];
    spy.getTopStories.and.returnValue(of(expectedData));
    fixture.detectChanges();
    expect(component.stories$).toBeDefined();
  })

  it('should return stories as undefined', () => {
    expect(component.stories$).not.toBeDefined();
  })

  it('should get story count as 5', () => {
    component.ngOnInit();
    expect(component.storyCount).toEqual(5);
  })
});
