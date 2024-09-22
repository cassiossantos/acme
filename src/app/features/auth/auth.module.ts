import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninContainerComponent } from './containers/signin.container';
import { SigninPresenterComponent } from './presenters/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  declarations: [SigninContainerComponent, SigninPresenterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
