import { HttpClient } from '@angular/common/http';
import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  backEndURL="http://localhost:8080/etudiants"
  etudiants:any
  constructor(private http:HttpClient) { }

  getAllEtudiants(){
    return this.http.get<any[]>(this.backEndURL)
  }

}
