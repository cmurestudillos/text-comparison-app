import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotificacionComponent } from './update-notificacion.component';

describe('UpdateNotificacionComponent', () => {
  let component: UpdateNotificacionComponent;
  let fixture: ComponentFixture<UpdateNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateNotificacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
