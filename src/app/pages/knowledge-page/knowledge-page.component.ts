import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api-service/api.service';
import { HelperService } from 'src/app/services/helper-service/helper.service';

@Component({
  selector: 'app-knowledge-page',
  templateUrl: './knowledge-page.component.html',
  styleUrls: ['./knowledge-page.component.scss'],
})
export class KnowledgePageComponent implements OnInit {
  isAdmin: boolean = true;
  knowledgeDescr: string =
    'Οι γνώσεις περιλαμβάνουν τις δεξιότητες, την εξειδίκευση και τις πληροφορίες που έχει αποκτήσει ένας εργαζόμενος από επιμορφώσεις, εμπειρία, πρακτική άσκηση, και απαιτούνται για την αποτελεσματική εκτέλεση των καθηκόντων μίας συγκεκριμένης θέσης. Το γεγονός αυτό τις καθιστά κρίσιμες για τη σωστή λειτουργία των φορέων της Δημόσιας Διοίκησης. Στο πλαίσιο της Δημόσιας Διοίκησης, συγκεκριμένες γνώσεις περιλαμβάνονται στα Γενικά Περιγράμματα θέσης, προκειμένου να περιγράψουν με τον βέλτιστο τρόπο τις απαιτήσεις  κάθε θέσης εργασίας. Οι γνώσεις που απαιτεί κάθε θέση εργασίας περιλαμβάνονται λεπτομερώς στα Γενικά Περιγράμματα θέσης. Το σύνολο των γνώσεων αυτών δημιουργούν δέκα επτά (17) ευρύτερες κατηγορίες γνώσεων, οι οποίες εμφανίζονται στα Προφίλ Ρόλων. Αυτή η δομή διευκολύνει την ανάλυση, την κατανόηση και τη χρήση των γνώσεων για την ενίσχυση της στρατηγικής διαχείρισης Ανθρωπίνου Δυναμικού. Η κατηγοριοποίηση των γνώσεων βασίζεται στην εννοιολογική τους συνάφεια και περιλαμβάνει τις εξής κατηγορίες γνώσεων: <br>  1.  Διοικητική γνώση Δημοσίου <br>  2. Οικονομικά & λογιστικά <br>  3. Γνώση έρευνας, μελετών & διοίκησης έργων <br>  4. Ξένες γλώσσες <br>  5. Εκπαίδευση <br>  6. Υγεία & κοινωνική πρόνοια <br>  7. Ψηφιακές γνώσεις <br>  8. Γνώση χειρισμού & επιμέλειας τεχνικού εξοπλισμού <br>  9. Γνώση νομικού πλαισίου <br>  10. Ασφάλεια & ρίσκο <br>  11. Επικοινωνία & μέσα πολιτισμού <br>  12. Περιβάλλον & βιωσιμότητα <br>  13. Υγιεινή τροφίμων & εστίασης <br>  14. Υγιεινή χώρων <br>  15. Μεταφορές <br>  16. Κατασκευές & μηχανολογία <br> 17. Ηθική & δεοντολογία  ';
  selectedTab: any;
  accordionTabs: any = [];

  tooltipContent: string = '';
  constructor(
    private apiService: ApiService,
    private helperService: HelperService
  ) {}
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
    if (title) {
      this.apiService.editKnowledgeTitle(tab.id, title).subscribe(
        (resp) => {
          this.getAccordionTabs();
        },
        (error) => {
          this.helperService.errorHandle(error);
        }
      );
    }
  }
  getAccordionTabs() {
    this.apiService.getKnowledgeCategories().subscribe(
      (resp) => {
        this.accordionTabs = resp;
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
  }
}
