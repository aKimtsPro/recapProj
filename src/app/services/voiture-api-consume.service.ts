import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voiture } from '../model/Voiture';
import { ApiConsumeService } from './ApiConsumeService'

@Injectable({
  providedIn: 'root'
})
export class VoitureApiConsumeService extends ApiConsumeService {

  constructor(private client: HttpClient) {
    super();
  }

  getAll(subsriber: (reponse: Voiture[]) => void) : void {
    this.client.get(this.BASE_URL + '/voiture').subscribe(
      subsriber, 
      error => alert("une erreur s'est produite : " + error.message));
  }

  insert(toInsert: Voiture, subscriber: (response: any) => void) : void {
    this.client.post(this.BASE_URL + "/voiture", toInsert).subscribe(
      subscriber,
      error => alert("la voiture n'a pas put être enregistrée")
    );
  }

}
