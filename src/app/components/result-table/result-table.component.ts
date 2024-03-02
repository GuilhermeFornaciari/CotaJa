import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { EnterpriseService } from '../../services/enterprise.service';
import { Product } from '../register-table/register-table.component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-result-table',
  standalone: true,
  imports: [],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css'
})
export class ResultTableComponent {
  @Input() public activeId: number = 0
  enterprise = this.enterpriseService.enterprisesData[this.activeId]
  totalValue = signal(0)
  lowerestValues: Array<Product> = []
  constructor(
    private enterpriseService: EnterpriseService,
    ){}
  ngOnChanges(changes: SimpleChanges) {
      if (changes['activeId']) {
        this.enterprise = this.enterpriseService.enterprisesData[this.activeId]
      }
      switch (this.activeId){
        case 0: {
          this.lowerestValues = this.enterprise.products.filter((product, index)=>{
            if (this.enterprise1Products[index].value && this.enterprise2Products[index].value){
              return (product.value <= this.enterprise1Products[index].value) && (product.value <= this.enterprise2Products[index].value)
            }
            return this.enterprise1Products[index].value + this.enterprise2Products[index].value ?
            product.value <= this.enterprise1Products[index].value || this.enterprise2Products[index].value:
            true
          })
          this.calculateTotalValue()
          break
        }
        case 1: {
          this.lowerestValues = this.enterprise.products.filter((product, index)=>{
            if (this.enterprise0Products[index].value && this.enterprise2Products[index].value){
              return (product.value <= this.enterprise0Products[index].value) && (product.value <= this.enterprise2Products[index].value)
            }
            return this.enterprise0Products[index].value + this.enterprise2Products[index].value ?
            product.value <= this.enterprise0Products[index].value || this.enterprise2Products[index].value:
            true
          })
          this.calculateTotalValue()
          break
        }
        case 2: {
          this.lowerestValues = this.enterprise.products.filter((product, index)=>{
            if (this.enterprise0Products[index].value && this.enterprise1Products[index].value){
              return (product.value <= this.enterprise0Products[index].value) && (product.value <= this.enterprise1Products[index].value)
            }
            return this.enterprise0Products[index].value + this.enterprise1Products[index].value ?
            product.value <= this.enterprise0Products[index].value || this.enterprise1Products[index].value:
            true
          })
          this.calculateTotalValue()
          break
        }
      }


    }
  calculateTotalValue(){
    this.totalValue = signal(this.lowerestValues.reduce((acumulator,currentValue)=> {return acumulator + currentValue.value * currentValue.quantity},0))
  }
    get enterprise0Products(){
      return this.enterpriseService.enterprisesData[0].products
    }
  get enterprise1Products(){
    return this.enterpriseService.enterprisesData[1].products
  }
  get enterprise2Products(){
    return this.enterpriseService.enterprisesData[2].products
  }
  dowloadReport(){
    const doc = new jsPDF();
    autoTable(doc, { html: '#reportTableComponent' })
    doc.save("Cotação da empresa")
  }
}
