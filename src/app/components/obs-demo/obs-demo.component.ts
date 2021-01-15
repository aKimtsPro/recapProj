import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, of, Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.scss']
})
export class ObsDemoComponent implements OnInit {

  obs : Observable<String> = of("salut", "ca", "va", "?");
  // = new Observable(subscriber => {
  //   const to_send = ["salut", "ca", "va", "?"];

  //   if(to_send.length === 3)
  //     subscriber.error("error happened")

  //   to_send.forEach((value) => subscriber.next(value))
  // });

  subject : Subject<String> = new Subject();
  toEmit: string = '';

  constructor() { }

  ngOnInit() {
  }

  subscribe() {
    this.subject.subscribe(
      (emitted) => console.log(emitted),
      (error) => console.log(error),
      () => console.log("COMPLETED")
    );
  }

  emit(){
    this.subject.next(this.toEmit)
  }

}
