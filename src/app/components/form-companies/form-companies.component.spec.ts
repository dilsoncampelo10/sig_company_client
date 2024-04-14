import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompaniesComponent } from './form-companies.component';

describe('FormCompaniesComponent', () => {
  let component: FormCompaniesComponent;
  let fixture: ComponentFixture<FormCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
