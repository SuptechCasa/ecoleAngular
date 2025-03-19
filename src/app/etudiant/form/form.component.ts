import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
etudiantData=this.fb.group({
  id:['',Validators.required],
  nom:['',Validators.required],
  age:['',Validators.required]
})
selectedFile:any
etudiant:any
action="Ajouter"
constructor(private activeModal:NgbActiveModal,private fb:FormBuilder,private etudiantService:EtudiantService){}

actionEtudiant(){
  const id=this.etudiantData.get('id')?.value
  const nom=this.etudiantData.get('nom')?.value
  const age=this.etudiantData.get('age')?.value
  const formData=new FormData()
  if (id) formData.append('id',id)
  if (nom) formData.append('nom',nom)
  if (age) formData.append('age',age)
  formData.append('photo',this.selectedFile)

  if (this.action==="Ajouter"){
  this.etudiantService.addEtudiant(formData)
  }else{
    this.etudiantService.updateEtudiant(formData)
  }
  this.activeModal.close()
}
ngOnInit() {
  if (this.action==="Modifier"){
    this.etudiantData.setValue(this.etudiant)
  }
}

selectFile(event:Event){
  const fileInput=event.target as HTMLInputElement
  if (fileInput.files&&fileInput.files.length)
  this.selectedFile=fileInput.files[0]
}
}
