import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBikesComponent } from './create-bikes.component';

describe('CreateBikesComponent', () => {
  let component: CreateBikesComponent;
  let fixture: ComponentFixture<CreateBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
