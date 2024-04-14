import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPartnersComponent } from './form-partners.component';

describe('FormPartnersComponent', () => {
  let component: FormPartnersComponent;
  let fixture: ComponentFixture<FormPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPartnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
