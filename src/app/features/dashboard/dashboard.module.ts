import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CashFlowPresenterComponent } from './presenters/cash-flow.component';
import { CashFlowContainerComponent } from './containers/cash-flow.container';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [CashFlowPresenterComponent, CashFlowContainerComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
})
export class DashboardModule {}
