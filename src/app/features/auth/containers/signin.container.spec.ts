import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { loadAccounts, login } from '../store/auth.actions';
import { selectAccounts } from '../store/auth.selectors';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SigninContainerComponent } from './signin.container';
import { AuthState } from '../store';

describe('SigninContainerComponent', () => {
  let component: SigninContainerComponent;
  let fixture: ComponentFixture<SigninContainerComponent>;
  let store: MockStore;
  const initialState: AuthState = {
    accounts: [{ id: 'ss', email: 'test@example.com', name: 'Test User', avatar: 'avatar.png' }],
    user: null,
    loading: false,
    error: false,
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, StoreModule.forRoot({})],
      declarations: [SigninContainerComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectAccounts, initialState.accounts);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadAccounts on init', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(loadAccounts());
  });

  it('should create the form with email and password controls', () => {
    expect(component.form.contains('email')).toBeTrue();
    expect(component.form.contains('password')).toBeTrue();
  });

  it('should dispatch login action on form submit if form is valid', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.form.setValue({ email: 'test@example.com', password: 'password123' });

    component.onSubmit();

    expect(dispatchSpy).toHaveBeenCalledWith(
      login({ user: { email: 'test@example.com', password: 'password123' } }),
    );
  });

  it('should not dispatch login action if form is invalid', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.form.setValue({ email: '', password: '' });

    component.onSubmit();

    expect(dispatchSpy).not.toHaveBeenCalled();
  });
});
