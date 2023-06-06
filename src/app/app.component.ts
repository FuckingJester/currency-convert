import { Component,OnInit,ChangeDetectorRef,ChangeDetectionStrategy,Input, DoCheck, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
  
})
export class AppComponent implements OnInit,DoCheck{
  uahToUsd : any = []
  uahToEur : any = []
  fromCur = 'USD'
  toCur = 'USD'
  fromValue = 1
  toValue = 1  
  result : any = []
  
  constructor(
    private currencyService : CurrencyService ,
    private changeDetector : ChangeDetectorRef
    ){
  }

  setFromCur(cur : string){
    this.fromCur = cur
    this.fromValue = 1
    this.toValue = 1
    console.log(this.fromCur)
  }
  setToCur(cur : string){
    this.toCur = cur
    this.fromValue = 1
    this.toValue = 1
    console.log(this.toCur)
  } 
  public changeFrom(value : any){
    this.fromValue = value / this.result.conversion_rate
    console.log(value)
  }
  public changeTo(value : any){
    this.toValue = value * this.result.conversion_rate
    console.log(value)
  }

  getCurrency(){
    this.currencyService.getCurrency(this.fromCur,this.toCur).subscribe((currency) => {
      this.result = JSON.stringify(currency)
      this.result = JSON.parse(this.result)
      console.log(this.result)
    })
  }
  ngDoCheck(): void {
    if(this.fromCur !== this.result.base_code || this.toCur !== this.result.target_code ){
      this.getCurrency()
    }
  }
  ngOnInit() : void {
    this.getCurrency()

    this.currencyService.getCurrency('USD', 'UAH').subscribe((currency) => {
      this.uahToUsd = JSON.stringify(currency)
      this.uahToUsd = JSON.parse(this.uahToUsd)
      
    })
    this.currencyService.getCurrency('EUR', 'UAH').subscribe((currency) => {
      this.uahToEur = JSON.stringify(currency)
      this.uahToEur = JSON.parse(this.uahToEur)
      
    })
  }
}
