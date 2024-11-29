import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knowledge-page',
  templateUrl: './knowledge-page.component.html',
  styleUrls: ['./knowledge-page.component.scss'],
})
export class KnowledgePageComponent implements OnInit {
  isAdmin: boolean = true;
  knowledgeDescr: string = 'Τι είναι γνώσεις, τι κάνουμε κ.λπ. Text επεξήγησης';
  knowledgeCategories = [
    {
      name: 'Διοικητική Γνώση Δημοσίου',
      description: 'Περιγραφή για Διοικητική Γνώση Δημοσίου',
    },
    { name: 'Ασφάλεια & Ρίσκο', description: 'Περιγραφή για Ασφάλεια & Ρίσκο' },
    {
      name: 'Διοικητική Γνώση Δημοσίου',
      description: 'Περιγραφή για Διοικητική Γνώση Δημοσίου',
    },
    { name: 'Ασφάλεια & Ρίσκο', description: 'Περιγραφή για Ασφάλεια & Ρίσκο' },
  ];
  accordionTabs = [
    {
      header: 'Διοικητική Γνώση Δημοσίου',
      content: [
        'Line 1: Lorem ipsum dolor sit amet.',
        'Line 2: Consectetur adipiscing elit.',
        'Line 3: Sed do eiusmod tempor incididunt ut labore.',
      ],
      tooltip: 'This is the tooltip for Header I',
    },
    {
      header: 'Ασφάλεια & Ρίσκο',
      content: [
        'Line 1: Sed ut perspiciatis unde omnis iste natus.',
        'Line 2: Error sit voluptatem accusantium.',
        'Line 3: Totam rem aperiam eaque ipsa quae.',
      ],
      tooltip: 'Tooltip for Header II',
    },
    {
      header: 'Ασφάλεια & Ρίσκο',
      content: [
        'Line 1: At vero eos et accusamus et iusto odio.',
        'Line 2: Dignissimos ducimus qui blanditiis praesentium.',
        'Line 3: Voluptatum deleniti atque corrupti.',
      ],
      tooltip: 'Header III additional information',
    },
  ];

  tooltipContent: string = '';
  constructor() {}
  ngOnInit(): void {}
  showTooltip(description: string): void {
    this.tooltipContent = description;
  }

  hideTooltip(): void {
    this.tooltipContent = '';
  }
  async showEditModal(titleDescr: string, isTextArea?: boolean) {
    const { value: title } = await Swal.fire({
      title: 'Αλλαγή Τίτλου',
      input: isTextArea ? 'textarea' : 'text',
      inputLabel: 'Τροποποιήστε τον τίτλο',
      // inputPlaceholder: 'Enter your email address',
      inputValue: titleDescr,
      confirmButtonText: 'Αποθήκευση',
      confirmButtonColor: '#003366',
      cancelButtonText: 'Ακύρωση',
      showCancelButton: true,
    });
    if (title) {
      Swal.fire(`Επιτυχημένη αλλαγή τίτλου!`);
    }
  }
}
