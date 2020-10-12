import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDirectoryComponent } from './club-directory.component';

describe('ClubDirectoryComponent', () => {
  let component: ClubDirectoryComponent;
  let fixture: ComponentFixture<ClubDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
