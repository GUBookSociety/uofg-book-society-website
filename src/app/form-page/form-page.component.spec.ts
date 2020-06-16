import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPageComponent } from './form-page.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';


describe('FormPageComponent', () => {
  let component: FormPageComponent;
  let fixture: ComponentFixture<FormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
      ],
      declarations: [ FormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.booksService.form.valid).toBeFalse();
  });

  it('form valid when full', () => {
    component.booksService.form.get('Name').setValue("Test");
    component.booksService.form.get('Author').setValue("test");
    component.booksService.form.get('PageCount').setValue(2);
    component.booksService.form.get('Rating').setValue(45);
    component.booksService.form.get('Month').setValue("test");
    expect(component.booksService.form.valid).toBeTruthy();
  });
});
