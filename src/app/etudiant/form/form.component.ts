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
formData=this.fb.group({
  id:['',Validators.required],
  nom:['',Validators.required],
  age:['',Validators.required]
})

etudiant:any
action="Ajouter"
constructor(private activeModal:NgbActiveModal,private fb:FormBuilder,private etudiantService:EtudiantService){}

actionEtudiant(){
  if (this.action==="Ajouter"){
  this.etudiantService.addEtudiant(this.formData.value)
  }else{
    this.etudiantService.updateEtudiant(this.formData.value)
  }
  this.activeModal.close()
}
ngOnInit() {
  if (this.action==="Modifier"){
    this.formData.setValue(this.etudiant)
  }
}
}
