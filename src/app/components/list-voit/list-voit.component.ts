import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { BehaviorSubject, from, ReplaySubject, Subject } from 'rxjs';
import { distinct, map } from 'rxjs/operators';
import { Voiture } from 'src/app/model/Voiture';
import { VoitureApiConsumeService  } from 'src/app/services/voiture-api-consume.service'

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
      marque:"marque",
      model:"model",
      immatriculation:"immaticulation"
    }
  ];
  marqueList: Array<String> = [];

  listVoitureChanged: Subject<Voiture[]>;
  
  constructor(private apiService: VoitureApiConsumeService) {

    this.listVoitureChanged = new BehaviorSubject(this.listVoiture);

    this.listVoitureChanged.subscribe((value) => {
      
      this.marqueList = [];
      let obs = from(this.listVoiture);

      obs.pipe(
        map(voit => voit.marque),
        distinct()
      ).subscribe(distinctMarque => this.marqueList.push(distinctMarque));

    })
  }

  ngOnInit(): void {
  }

  reload(){
    this.apiService.getAll(reponse => this.modifyListVoiture(reponse)); //.subscribe(reponse => this.listVoiture = reponse);
  }

  onAdd(toAdd: Voiture) {
    this.apiService.insert(toAdd, (reponse) => {
      alert("La voiture a bien été ajoutée");
      this.reload();
    })
  }

  modifyListVoiture(value: Voiture[]){
    this.listVoiture = value;
    this.listVoitureChanged.next(this.listVoiture);
  }

  subscribe(){
    this.listVoitureChanged.subscribe(console.log); //System.out::println
    // this.listVoitureChanged.subscribe(e => console.log()); // value -> System.out.println(value)
  }

}
