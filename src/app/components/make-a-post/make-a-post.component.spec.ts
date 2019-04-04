import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAPostComponent } from './make-a-post.component';

describe('MakeAPostComponent', () => {
  let component: MakeAPostComponent;
  let fixture: ComponentFixture<MakeAPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
