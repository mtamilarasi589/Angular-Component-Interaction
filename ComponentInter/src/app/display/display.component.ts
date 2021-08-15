import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() exp:any;
  
  
  constructor() { 
    

  }
   ngOnInit(): void {

}
 
  
 post($event:any) {
  this.exp=$event;
}
  
}
