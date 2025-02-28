import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  backEndURL="http://localhost:8080/etudiants"
  etudiants:any
  constructor(private http:HttpClient) { }

  getAllEtudiants():any{
     this.http.get(this.backEndURL).subscribe(data=>{
      this.etudiants=data
      return this.etudiants
    })

  }
}
