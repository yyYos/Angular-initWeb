import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-custom',
  templateUrl: './list-custom.component.html',
  styleUrls: ['./list-custom.component.scss']
})
export class ListCustomComponent implements OnInit {

  @Input()
  arrayNames!:String[];
  @Input()
  veticalOrientation: boolean = false;
  @Input()
  horizontalOrientation: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
