import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.markup.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  //message:string ="hello";
  dateMessage :string;

  constructor() {

    setInterval(()=> {
      let currentDate= new Date();
      this.dateMessage=currentDate.toDateString() +' '+currentDate.toLocaleTimeString();
    },1000
    );

    

   }
 
  ngOnInit() {
  }

  addTwoNumbers(a: number,b:number)
  {return a+b;}

}
