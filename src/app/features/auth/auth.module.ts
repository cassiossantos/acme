import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninContainerComponent } from './containers/signin.container';
import { SigninPresenterComponent } from './presenters/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SigninContainerComponent, SigninPresenterComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, MaterialModule],
})
export class AuthModule {}
