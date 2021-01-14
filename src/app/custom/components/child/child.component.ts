import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  communicated: string;

  @Output()
  resetEvent: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("child emitted");
    this.resetEvent.emit("chaine envoyé au parent");
  }

}
