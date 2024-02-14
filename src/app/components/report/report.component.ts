import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TableNavComponent } from '../table-nav/table-nav.component';
import { InverseTableNavComponent } from '../inverse-table-nav/inverse-table-nav.component';
import { ResultTableComponent } from '../result-table/result-table.component';
import { RegisterTableComponent } from '../register-table/register-table.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [TableNavComponent, InverseTableNavComponent, ResultTableComponent, RegisterTableComponent],
  templateUrl: './report.component.html',
})
export class ReportComponent  {
  navActiveId: string = '0'
  changeActiveId(id:any){
    this.navActiveId = id
    console.log(this.navActiveId);

  }
}
