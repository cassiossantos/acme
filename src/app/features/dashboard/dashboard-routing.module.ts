import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashFlowContainerComponent } from './containers/cash-flow.container';

const routes: Routes = [
  {
    path: '',
    component: CashFlowContainerComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
