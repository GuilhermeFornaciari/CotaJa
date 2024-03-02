import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Signal, ViewChild, signal } from '@angular/core';
import { TableNavComponent } from '../table-nav/table-nav.component';
import { InverseTableNavComponent } from '../inverse-table-nav/inverse-table-nav.component';
import { ResultTableComponent } from '../result-table/result-table.component';
import { Product, RegisterTableComponent } from '../register-table/register-table.component';
import { Enterprise, EnterpriseService } from '../../services/enterprise.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [TableNavComponent, InverseTableNavComponent, ResultTableComponent, RegisterTableComponent,ResultTableComponent],
  templateUrl: './report.component.html',
})
export class ReportComponent  {
  navActiveId: number = 0
  enterprises: Signal<Array<Enterprise>>
  constructor(
    public enterpriseService: EnterpriseService
  ){
    this.enterprises = signal(enterpriseService.enterprisesData)
  }
  NumberActiveId() {
    return Number(this.navActiveId)
  }
  changeActiveId(id:any){
    this.navActiveId = id
  }
  changeCommonValue(enterprise: Product){

  }
}
