import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { HelperService } from 'src/app/services/helper-service/helper.service';

@Component({
  selector: 'app-general-outlines',
  templateUrl: './general-outlines.component.html',
  styleUrls: ['./general-outlines.component.scss'],
})
export class GeneralOutlinesComponent {
  knowledgeDescr: string = 'Τι είναι γνώσεις, τι κάνουμε κ.λπ. Text επεξήγησης';
  generalOutlines: any[] = [];
  displayModal: boolean = false;
  selectedOutline: any;
  constructor(private apiService: ApiService,private helperService:HelperService) {}
  ngOnInit(): void {
    this.getGeneralOutlines();
  }
  openModal(outline: any) {
    this.selectedOutline = outline;
    this.displayModal = true;
  }
  getGeneralOutlines() {
    this.apiService.getGeneralOutlines().subscribe((resp: any) => {
      this.generalOutlines = resp;
    }, (error) => {
      this.helperService.errorHandle(error);
    });
  }
}
