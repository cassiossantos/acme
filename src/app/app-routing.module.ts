import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' }, // Redireciona para a rota signin
  { path: '**', redirectTo: '/auth/signin' }, // Redireciona rota desconhecida
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
