import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavComponent { 
  @Input() uahToUsd : any = []
  @Input() uahToEur : any = []
}