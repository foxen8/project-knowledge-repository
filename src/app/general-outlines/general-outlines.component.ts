import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-general-outlines',
  templateUrl: './general-outlines.component.html',
  styleUrls: ['./general-outlines.component.scss'],
})
export class GeneralOutlinesComponent {
  knowledgeDescr: string = 'Τι είναι γνώσεις, τι κάνουμε κ.λπ. Text επεξήγησης';
  generalOutlines: any[] = [];
  displayModal:boolean=false;
  constructor() {}
  ngOnInit(): void {
    this.generalOutlines = [
      {code:'1.1',name:'Προϊστάμενος/η Γενικής Διεύθυνσης'},
      {code:'1.2',name:'Προϊστάμενος/η  Διεύθυνσης'},
      {code:'1.3',name:'Προϊστάμενος/η Τμήματος'},
      {code:'1.4',name:'Εμπειρογνώμονας'},
      {code:'1.5',name:'Διοικητικός/η Υπάλληλος'},
      {code:'1.6',name:'Υπεύθυνος/η Τομέα'},
    ];
  }
  openModal(outline:any){
    this.displayModal=true;
  }
}
