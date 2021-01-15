import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Voiture } from 'src/app/model/Voiture';

@Component({
  selector: 'app-voiture-form',
  templateUrl: './voiture-form.component.html',
  styleUrls: ['./voiture-form.component.scss']
})
export class VoitureFormComponent implements OnInit {

  voitureForm: FormGroup;

  @Output("add-event")
  voitureEmitter = new EventEmitter<Voiture>()

  constructor(builder: FormBuilder) {
    this.voitureForm = builder.group(
      {
        marque: new FormControl(null, Validators.required),
        model: new FormControl(null, Validators.required),
        immatriculation: new FormControl(null, Validators.required),
        couleur: new FormControl()
      }
    )
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.voitureForm.valid)
      this.voitureEmitter.emit(this.voitureForm.value)
  }

}
