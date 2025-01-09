import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api-service/api.service';

@Component({
  selector: 'app-knowledge-page',
  templateUrl: './knowledge-page.component.html',
  styleUrls: ['./knowledge-page.component.scss'],
})
export class KnowledgePageComponent implements OnInit {
  isAdmin: boolean = true;
  knowledgeDescr: string = 'Τι είναι γνώσεις, τι κάνουμε κ.λπ. Text επεξήγησης';
  selectedTab: any;
  accordionTabs: any = [];

  tooltipContent: string = '';
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getAccordionTabs();
  }
  showTooltip(description: string): void {
    this.tooltipContent = description;
  }

  hideTooltip(): void {
    this.tooltipContent = '';
  }
  async showEditModal(tab: any, isTextArea?: boolean) {
    this.selectedTab = tab;
    const { value: title } = await Swal.fire({
      title: 'Αλλαγή Τίτλου',
      input: isTextArea ? 'textarea' : 'text',
      inputLabel: 'Τροποποιήστε τον τίτλο',
      inputValue: tab.name,
      confirmButtonText: 'Αποθήκευση',
      confirmButtonColor: '#003366',
      cancelButtonText: 'Ακύρωση',
      showCancelButton: true,
    });
    console.log(tab)
    console.log(title)
    if (title) {
      this.apiService.editKnowledgeTitle(tab.id, title).subscribe((resp) => {
        this.getAccordionTabs();
      });
    }
  }
  getAccordionTabs() {
    this.apiService.getKnowledgeCategories().subscribe((resp) => {
      this.accordionTabs = resp;
    });
  }
}
