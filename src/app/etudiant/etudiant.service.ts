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
    this.http.post(this.backEndURL,etudiant).subscribe(addedEtudiant=>{
      this.etudiants.update(students=>[...students,addedEtudiant])
    })
  }

  deleteEtudiant(id:number){
    this.http.delete(this.backEndURL+"/"+id).subscribe(result=>{
      if (result){
        this.etudiants.update(students=>students.filter(etudiant=>(etudiant.id!=id)))
      }
    })
  }

  updateEtudiant(etudiant:any){
    this.http.put(this.backEndURL,etudiant).subscribe(updatedEtudiant=>{
      this.etudiants.update(students=>students.map(student=>(student.id===etudiant.id)?updatedEtudiant:student))
    })
}
}
