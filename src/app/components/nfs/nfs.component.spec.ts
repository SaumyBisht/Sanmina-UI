import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfsComponent } from './nfs.component';

describe('NfsComponent', () => {
  let component: NfsComponent;
  let fixture: ComponentFixture<NfsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NfsComponent]
    });
    fixture = TestBed.createComponent(NfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
