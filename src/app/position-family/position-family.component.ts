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
  jobPositions: string[] = [
    'Προϊστάμενος/η Γενικής Διεύθυνσης',
    'Προϊστάμενος/η Διεύθυνσης',
    'Προϊστάμενος/η Τμήματος',
    'Εμπειρογνώμονας',
    'Διοικητικός/η Υπάλληλος',
  ];
  generalOutlines = [
    { name: 'ΓΠΘ1', code: '1' },
    { name: 'ΓΠΘ2', code: '2' },
    { name: 'ΓΠΘ3', code: '3' },
    { name: 'ΓΠΘ4 ΚΛΠ', code: '4' },
  ];

  selectedOutline: any;
  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.familyName = state?.['familyName'] || '';
    this.parentName = state?.['parentName'] || '';
  }
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
  }

  onChipClick(selectedChip: string): void {
    this.displayModal = true;
  }
  onDelete(position: any) {}
  showEditModal(sectionTitle?: string, sectionDescription?: string) {
    sectionTitle = sectionTitle ?? '';
    sectionDescription = sectionDescription ?? '';
    const isDisabled = sectionTitle && sectionTitle !== '';
    // const dialogHeight = `${Math.max(1500, sectionDescription.length / 5)}px`;
    const htmlContent = `
      <div style="text-align: left;">
        <label for="input1" style="display: block; margin-bottom: 0.5em; font-size: 30px; font-weight: bold;">Τίτλος</label>
        ${
          !isDisabled
            ? `<input type="text" id="input1" class="swal2-input" placeholder="Τίτλος Ενότητας" value="${sectionTitle}" style="width: 90%;">`
            : `<h3>${sectionTitle}</h3>`
        }
        <label for="input2" style="display: block; margin-top: 1em; margin-bottom: 0.5em; font-size: 30px; font-weight: bold;">Περιγραφή Ενότητας</label>
        <textarea id="input2" class="swal2-textarea" placeholder="Συμπληρώστε την περιγραφή της ενότητας" style="width: 90%; height: 500px;">${sectionDescription}</textarea>
      </div>`;
    Swal.fire({
      title: 'Προσθήκη Ενότητας',
      html: htmlContent,
      showCancelButton: true,
      width: '1400px',
      confirmButtonText: 'Αποθήκευση',
      confirmButtonColor: '#003366',
      cancelButtonText: 'Ακύρωση',
      focusConfirm: false,
      allowEscapeKey: true,
      preConfirm: () => {
        const input1Value = (
          document.getElementById('input1') as HTMLInputElement
        ).value;
        const input2Value = (
          document.getElementById('input2') as HTMLInputElement
        ).value;

        if (!input1Value || !input2Value) {
          Swal.showValidationMessage('Παρακαλώ συμπληρώστε και τα δύο πεδία');
          return;
        }
        return { input1: input1Value, input2: input2Value };
      },
      willOpen: () => {
        const popup = document.querySelector('.swal2-popup');
        const textarea = document.querySelector(
          '.swal2-textarea'
        ) as HTMLElement;

        // Dynamically adjust the height of the modal based on textarea content
        if (textarea && popup) {
          const textareaHeight = textarea.scrollHeight;

          // Ensure popup is treated as HTMLElement and apply styles
          const popupElement = popup as HTMLElement;
          popupElement.style.minHeight = `${textareaHeight + 500}px`; // Add extra height for spacing
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Values:', result.value); // result.value contains { input1, input2 }
      }
    });
  }

  addGOutline() {
    const optionsHtml = this.generalOutlines
      .map(
        (goutline) =>
          `<option value="${goutline.code}">${goutline.name}</option>`
      )
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
        if (popup) {
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
  deleteGeneralOutline(outline:any){}
}
