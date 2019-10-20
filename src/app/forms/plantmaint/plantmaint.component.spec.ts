import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantmaintComponent } from './plantmaint.component';

describe('PlantmaintComponent', () => {
  let component: PlantmaintComponent;
  let fixture: ComponentFixture<PlantmaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantmaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantmaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
