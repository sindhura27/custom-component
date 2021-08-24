import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})
export class InputElementComponent implements OnInit {
  @Input() items: any;
  @Output() remove = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }
  removeItem(item){
    this.remove.emit(item);
  }
}
