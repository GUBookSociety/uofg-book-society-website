import { TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase)
      ]
    });
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
