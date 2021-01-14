import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/model/Voiture';

@Component({
  selector: 'app-list-voit',
  templateUrl: './list-voit.component.html',
  styleUrls: ['./list-voit.component.css']
})
export class ListVoitComponent implements OnInit {

  startingString: string = '';
  voitColor: string = '';
  listVoiture: Array<Voiture> = [
    {
      model:"bipbip",
      marque:"vroomMobile",
      immatriculation:"pop-020"
    },
    {
      model:"asphalt",
      marque:"FerSurRoue",
      immatriculation:"hip-010",
      couleur: "red"
    },
    {
      model:"pluie",
      marque:"neige",
      immatriculation:"hop-040",
      couleur: "blue"
    },
    {
      model:"Froid",
      marque:"Vent",
      immatriculation:"rnb-963",
      couleur: "green"
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
