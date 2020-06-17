import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
      ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
