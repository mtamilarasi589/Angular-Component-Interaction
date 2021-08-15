import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  experience={name:"",comments:""};
  //status:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

 post(newItem:any) {
    //this.status=true;
    this.newItemEvent.emit(newItem);
    this.router.navigate(['display']);
  
  }

}