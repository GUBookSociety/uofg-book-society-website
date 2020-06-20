import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase)
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
