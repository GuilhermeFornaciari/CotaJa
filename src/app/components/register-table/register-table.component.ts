import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, signal } from '@angular/core';
import { Enterprise, EnterpriseService } from '../../services/enterprise.service';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-table',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register-table.component.html',
  styleUrl: './register-table.component.css'
})
export class RegisterTableComponent implements OnChanges{
  @Input() public activeId: number = 0
  enterprise = this.enterpriseService.enterprisesData[this.activeId]
  form: FormGroup = this.fb.group({
    name:[''],
    products: this.fb.array([])
  })
  totalValue = signal(0)

  constructor(
    private enterpriseService: EnterpriseService,
    private fb: FormBuilder,

    ){
    }
  ngOnChanges(changes: SimpleChanges) {
      if (changes['activeId']) {
        this.enterprise = this.enterpriseService.enterprisesData[Number(this.activeId)]
        this.totalValue = signal(0)
        this.totalValue = signal(this.enterprise.products.reduce((acumulator,currentValue)=> {return acumulator + currentValue.value * currentValue.quantity},0))
        this.products.clear()
        this.enterprise.products.map(product => {
          this.products.push(this.newProduct(product))
        });
        this.name.setValue(this.enterprise.name)

      }
  }
  get name(): FormControl{
    return this.form.get('name') as FormControl
  }
  get products(): FormArray{
    return this.form.get('products') as FormArray
  }

  newProduct(product?: Product): FormGroup {
    return this.fb.group({
      productName: [product?.productName || '' ,Validators.required],
      value: [product?.value || '',Validators.required],
      quantity: [product?.quantity || '',Validators.required],
    });
  }
  addNewProduct(){
    this.products.push(this.newProduct())

  }
  updateTable(){
    if(this.form.valid){
      this.enterpriseService.enterprisesData[this.activeId] = this.form.value as Enterprise

      this.form.value.products.map((prod: Product, index: number )=> {
        this.updateCommonValue(prod,index)
      })
      this.enterpriseService.updateLocalStorage()
    }

  }
  updateCommonValue(prod : Product, i: number){
    if (this.enterpriseService.enterprisesData[0].products[i]){

      this.enterpriseService.enterprisesData[0].products[i].productName = prod.productName
      this.enterpriseService.enterprisesData[0].products[i].quantity = prod.quantity
    }
    else this.enterpriseService.enterprisesData[0].products.push({...prod, value: 0})

    if (this.enterpriseService.enterprisesData[1].products[i]){

      this.enterpriseService.enterprisesData[1].products[i].productName = prod.productName
      this.enterpriseService.enterprisesData[1].products[i].quantity = prod.quantity
    }
    else this.enterpriseService.enterprisesData[1].products.push({...prod, value: 0})

    if (this.enterpriseService.enterprisesData[2].products[i]){
      this.enterpriseService.enterprisesData[2].products[i].productName = prod.productName
      this.enterpriseService.enterprisesData[2].products[i].quantity = prod.quantity
    }
    else this.enterpriseService.enterprisesData[2].products.push({...prod, value: 0})
  }
  getTotalValue(){
    return this.enterprise.products.reduce((acumulator,currentValue)=> {return acumulator + currentValue.value * currentValue.quantity},0)
  }
  clearAll(){

    this.enterpriseService.clearAll()
  }
}

export type Product = {
  productName: string,
  value: number,
  quantity: number,
}
