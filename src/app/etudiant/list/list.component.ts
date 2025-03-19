import { Component } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  etudiants=this.etudiantService.etudiants
constructor(private etudiantService:EtudiantService,private modal:NgbModal){}
ngOnInit() {
this.etudiantService.getAllEtudiants()
}

openConfirm(etudiant:any){
const refModal=this.modal.open(ConfirmComponent)
refModal.componentInstance.nomEtudiant=etudiant.nom
refModal.result.then(reponse=>{
 if (reponse === 'oui'){
  this.etudiantService.deleteEtudiant(etudiant.id)
 }
})
}

openUpdateModal(etudiant:any,event:Event){
  const refModal=this.modal.open(FormComponent,{size:"sm"})
  refModal.componentInstance.etudiant=etudiant
  refModal.componentInstance.action="Modifier"
  const updateImg=event.target as HTMLImageElement
  const img=updateImg.parentElement?.parentElement?.children[3]
  updateImg.src=updateImg.src

}
}
