import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninContainerComponent } from './containers/signin.container';
import { SigninPresenterComponent } from './presenters/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AccountService } from './services/account.service';
@NgModule({
  declarations: [SigninContainerComponent, SigninPresenterComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [AuthService, AccountService],
})
export class AuthModule {}
