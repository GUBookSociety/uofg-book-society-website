import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { BooksService } from '../shared/books.service';
import { DebugElement } from '@angular/core';
import { Book } from '../shared/models/book.model';


describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;
  let de: DebugElement;

  let service: BooksService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [BooksListComponent],
      providers: [BooksService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    service = de.injector.get(BooksService);


    spy = spyOn(service, 'getBooks').and.returnValue(new Set());

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getItems', () => {
    expect(spy).toHaveBeenCalled();
  });
});
