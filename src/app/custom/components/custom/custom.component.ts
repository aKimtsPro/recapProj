import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  aCommu: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onReset(info){
    console.log("parent received : " + info);
    this.aCommu = '';
  }

}
