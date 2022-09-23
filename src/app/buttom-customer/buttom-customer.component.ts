import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-customer',
  templateUrl: './buttom-customer.component.html',
  styleUrls: ['./buttom-customer.component.scss']
})
export class ButtomCustomerComponent implements OnInit {

  @Input() label!:String;
  @Input() color!:String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
