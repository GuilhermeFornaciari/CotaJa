import { Injectable } from '@angular/core';
import { Product } from '../components/register-table/register-table.component';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  public enterprisesData: Array<Enterprise>
  constructor() {
    const localData = localStorage.getItem('enterprisesData')
    if (localData){
      this.enterprisesData = JSON.parse(localData)
    }
    else this.enterprisesData = [{
      name: '',
      products: []
    },
    {
      name: '',
      products: []
    },
    {
      name: '',
      products: []
    }

  ]
   }

   public updateLocalStorage(){
    localStorage.setItem('enterprisesData', JSON.stringify(this.enterprisesData))
   }
   public clearAll(){
    localStorage.clear()
   }
}

export type Enterprise =
{
  name:string
  products: Array<{
    productName: string,
    value: number,
    quantity: number,
  }>
}
