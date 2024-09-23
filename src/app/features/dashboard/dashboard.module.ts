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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskDirective } from '../../shared/currency-mask.directive';
import { TransactionService } from './services/transaction.service';
@NgModule({
  declarations: [
    CashFlowPresenterComponent,
    CashFlowContainerComponent,
    TopbarComponent,
    TableComponent,
    CardComponent,
    PaginatorComponent,
    CurrencyMaskDirective,
  ],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
  providers: [TransactionService],
})
export class DashboardModule {}
