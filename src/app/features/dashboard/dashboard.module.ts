import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CashFlowPresenterComponent } from './presenters/cash-flow.component';
import { CashFlowContainerComponent } from './containers/cash-flow.container';
import { MaterialModule } from '../../shared/material.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    CashFlowPresenterComponent,
    CashFlowContainerComponent,
    TopbarComponent,
    TableComponent,
    CardComponent,
    PaginatorComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
})
export class DashboardModule {}
