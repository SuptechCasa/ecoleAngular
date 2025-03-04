import { HttpClient } from '@angular/common/http';
import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  backEndURL="http://localhost:8080/etudiants"
  etudiants=signal<any[]>([])
  constructor(private http:HttpClient) { }

  getAllEtudiants():void{
    this.http.get<any[]>(this.backEndURL).subscribe(data=>{
      this.etudiants.set(data)
    })
  }
  addEtudiant(etudiant:any){
    this.http.post(this.backEndURL,etudiant).subscribe(data=>{
      this.etudiants.update(state=>[...state,data])

    })
  }
}
