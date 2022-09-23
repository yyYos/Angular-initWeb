import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'new-item-list',
  templateUrl: './new-item-list.component.html',
  styleUrls: ['./new-item-list.component.scss']
})
export class NewItemListComponent implements OnInit {

  @Input()
  label!: String;
  @Input()
  className:String = 'succes';

  constructor() { }

  ngOnInit(): void {
  }

}
