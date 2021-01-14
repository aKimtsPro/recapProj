import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-url',
  templateUrl: 'no-url.component.html',
  styles: [
    "button{border: 10px solid pink;}"
  ]
})
export class NoUrlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
