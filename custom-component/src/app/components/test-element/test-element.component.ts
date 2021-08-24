import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-element',
  templateUrl: './test-element.component.html',
  styleUrls: ['./test-element.component.scss']
})
export class TestElementComponent implements OnInit {
  items = [];
  testing: any;
  constructor() { }
  showFiller = false;

  ngOnInit() {
  }
  test(event){
    console.log(event);
    if(event.keyCode === 13 || event.keyCode === 188){
      let element = this.testing.split(',')[0];
      console.log(element);
      this.items.push(element);
      this.testing = ''
    }
  }
  removeItem(item){
    this.items.forEach((element, index) => {
      if(element === item){
        this.items.splice(index, 1);
      }
    })
    console.log(this.items)
  }

}
