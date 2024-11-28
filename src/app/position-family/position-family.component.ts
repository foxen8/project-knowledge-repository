import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-position-family',
  templateUrl: './position-family.component.html',
  styleUrls: ['./position-family.component.scss'],
})
export class PositionFamilyComponent implements OnInit {
  familyName: string | undefined;
  parentName: string | undefined;
  positions: any[] = [];
  displayModal: boolean = false;
  isAdmin: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private helperService: HelperService
  ) {}
  ngOnInit(): void {
    this.positions = [
      {
        positionDescription:
          ' Η Διοίκηση και Διαχείριση Πολιτικών περιλαμβάνει την αξιολόγηση και συντονισμό των διαδικασιών του οργανισμού και τη βελτίωση αξιοποίησης των πόρων, την επίτευξη των στόχων και την εξορθολογισμένη. Περιλαμβάνει τη λήψη αποφάσεων και πρωτοβουλιών με στόχο την εύρυθμη λειτουργία και τη βελτίωση του οργανισμού.',
        vision:
          '                      Μία αποδοτική και ευημερούσα Δημόσια Διοίκηση.',
        impact:
          'Μεριμνά για την ομαλή καθημερινή λειτουργία και το υγιές εργασιακό κλίμα των δημοσίων οργανισμών, διασφαλίζοντας την υψηλή ποιότητα των δημόσιων υπηρεσιών.',
        outlines:
          ' Προσανατολισμός στον πολίτη, Ομαδικότητα, Προσαρμοστικότητα, Προσανατολισμός στο αποτέλεσμα, Οργάνωση και προγραμματισμός, Επίλυση προβλημάτων και δημιουργικότητα, Επαγγελματισμός και ακεραιότητα, Διαχείριση γνώσης, Ηγετικότητα, Ψηφιακές δεξιότητες, Πρόσβαση δεξιοτήτων.',
        capabilities: '    Content for the top right fieldset. Fill as needed.',
        knowledgeCategories:
          '    Content for the top right fieldset. Fill as needed.',
      },
      {
        positionDescription:
          ' Η Διοίκηση και Διαχείριση Πολιτικών περιλαμβάνει την αξιολόγηση και συντονισμό των διαδικασιών του οργανισμού και τη βελτίωση αξιοποίησης των πόρων, την επίτευξη των στόχων και την εξορθολογισμένη. Περιλαμβάνει τη λήψη αποφάσεων και πρωτοβουλιών με στόχο την εύρυθμη λειτουργία και τη βελτίωση του οργανισμού.',
        vision:
          '                      Μία αποδοτική και ευημερούσα Δημόσια Διοίκηση.',
        impact:
          'Μεριμνά για την ομαλή καθημερινή λειτουργία και το υγιές εργασιακό κλίμα των δημοσίων οργανισμών, διασφαλίζοντας την υψηλή ποιότητα των δημόσιων υπηρεσιών.',
        outlines:
          ' Προσανατολισμός στον πολίτη, Ομαδικότητα, Προσαρμοστικότητα, Προσανατολισμός στο αποτέλεσμα, Οργάνωση και προγραμματισμός, Επίλυση προβλημάτων και δημιουργικότητα, Επαγγελματισμός και ακεραιότητα, Διαχείριση γνώσης, Ηγετικότητα, Ψηφιακές δεξιότητες, Πρόσβαση δεξιοτήτων.',
        capabilities: '    Content for the top right fieldset. Fill as needed.',
        knowledgeCategories:
          '    Content for the top right fieldset. Fill as needed.',
      },
    ];
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    this.route.queryParams.subscribe((params) => {
      this.familyName = state?.['familyName'] || '';
      this.parentName = state?.['parentName'] || '';
    });
  }
  jobPositions: string[] = [
    'Προϊστάμενος/η Γενικής Διεύθυνσης',
    'Προϊστάμενος/η Διεύθυνσης',
    'Προϊστάμενος/η Τμήματος',
    'Εμπειρογνώμονας',
    'Διοικητικός/η Υπάλληλος',
  ];
  onChipClick(selectedChip: string): void {
    this.displayModal = true;
  }
  onDelete(position: any) {}
  showEditModal(sectionTitle?: string, sectionDescription?: string) {
    this.helperService.openDialog(sectionTitle, sectionDescription);
  }
  generalOutlines = [
    { name: 'ΓΠΘ1', code: '1' },
    { name: 'ΓΠΘ2', code: '2' },
    { name: 'ΓΠΘ3', code: '3' },
    { name: 'ΓΠΘ4 ΚΛΠ', code: '4' },
  ];

  selectedOutline: any;
  addGOutline() {
    const optionsHtml = this.generalOutlines
    .map((goutline) => `<option value="${goutline.code}">${goutline.name}</option>`)
    .join('');

  const htmlContent = `
    <div style="text-align: left;">
      <label for="outlineSelect" style="display: block; margin-bottom: 0.5em; font-size: 30px; font-weight: bold;"></label>
      <select id="outlineSelect" class="custom-select" style="padding: 0.5em; font-size: 16px;">
        <option value="" disabled selected>Επιλέξτε ένα γενικό περίγραμμα</option>
        ${optionsHtml}
      </select>
    </div>
  `;

  Swal.fire({
    title: 'Προσθήκη Γενικού Περιγράμματος',
    html: htmlContent,
    showCancelButton: true,
    width: '800px',
    confirmButtonText: 'Αποθήκευση',
    confirmButtonColor: '#003366',
    cancelButtonText: 'Ακύρωση',
    focusConfirm: false,
    allowEscapeKey: true,
    preConfirm: () => {
      const selectedOutlineCode = (
        document.getElementById('outlineSelect') as HTMLSelectElement
      ).value;

      if (!selectedOutlineCode) {
        Swal.showValidationMessage('Παρακαλώ επιλέξτε μία πόλη');
        return;
      }
      const selectedOutline = this.generalOutlines.find(
        (outline) => outline.code === selectedOutlineCode
      );
      return { selectedOutline };
    },
    willOpen: () => {
      const popup = document.querySelector('.swal2-popup');

      // Dynamically adjust the height of the modal based on textarea content
      if ( popup) {

        // Ensure popup is treated as HTMLElement and apply styles
        const popupElement = popup as HTMLElement;
        popupElement.style.minHeight = `${500}px`; // Add extra height for spacing
      }
    },
  }).then((result) => {
    if (result.isConfirmed && result.value?.selectedOutline) {
      this.selectedOutline = result.value.selectedOutline;
    }
  });
  }
}
