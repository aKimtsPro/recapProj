import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap-base',
  templateUrl: './recap-base.component.html',
  styleUrls: ['./recap-base.component.css']
})
export class RecapBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  nom = "luc";

  showNom(){
    alert(this.nom);
  }

  changeName(){
    this.nom = "popol";
  }

  submit(){
    alert(this.nom);
  }

}
