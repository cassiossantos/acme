import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';
import { UserCredential } from 'firebase/auth';

describe('AuthService', () => {
  let service: AuthService;
  let afAuthMock: any;

  beforeEach(() => {
    afAuthMock = {
      signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword').and.returnValue(
        Promise.resolve({
          user: { uid: '123', email: 'test@example.com' },
        } as UserCredential),
      ),
      authState: of({ uid: '123', email: 'test@example.com' }),
    };

    TestBed.configureTestingModule({
      providers: [AuthService, { provide: AngularFireAuth, useValue: afAuthMock }],
    });

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and return user', async () => {
    const user = await service.login('test@example.com', 'password').toPromise();
    expect(user).toBeTruthy();
    expect(user.email).toEqual('test@example.com');
  });
});
