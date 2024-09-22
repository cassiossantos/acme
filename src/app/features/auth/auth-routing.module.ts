import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninContainerComponent } from './containers/signin.container';

const routes: Routes = [
  { path: 'signin', component: SigninContainerComponent },
  {
    path: '**',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
