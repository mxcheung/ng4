import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootyComponent } from './booty.component';

describe('BootyComponent', () => {
  let component: BootyComponent;
  let fixture: ComponentFixture<BootyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
