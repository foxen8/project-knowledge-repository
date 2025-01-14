import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { HelperService } from 'src/app/services/helper-service/helper.service';

@Component({
  selector: 'app-general-outlines',
  templateUrl: './general-outlines.component.html',
  styleUrls: ['./general-outlines.component.scss'],
})
export class GeneralOutlinesComponent {
  knowledgeDescr: string = 'Το Γενικό Περίγραμμα Θέσης Εργασίας είναι η αποτύπωση, με τρόπο συνοπτικό και ακριβή, της αποστολής, των κυρίων καθηκόντων και του συνόλου των ικανοτήτων και δεξιοτήτων που ικανοποιούν την άσκηση του αντικείμενου εργασίας μίας θέσης. Τα Γενικά Περιγράμματα Εργασίας χρησιμοποιούνται ως βάση για τον σχεδιασμό των Ειδικών Περιγραμμάτων Θέσεων εργασίας. Κάθε Γενικό Περίγραμμα Θέσης Εργασίας στο Αποθετήριο Γνώσεων ανήκει μόνο σε ένα Προφίλ Ρόλου.Τα Περιγράμματα Θέσεων Εργασίας (Γενικά και Ειδικά) αποτελούν ένα πολύτιμο εργαλείο της στρατηγικής στελέχωσης, για τη διαχείριση τόσο των υφισταμένων θέσεων εργασίας όσο και για την ανίχνευση αναγκών σύστασης νέων και συνεπώς πρέπει να γίνουν αντιληπτά ως μέρος μιας ευρύτερης πολιτικής που στοχεύει στην ορθολογική διαχείριση του Ανθρώπινου Δυναμικού των δημοσίων φορέων. Με αυτά είναι δυνατόν να: <br> 1. Μεταδοθούν στους υπαλλήλους οι προσδοκίες της διοίκησης που προκύπτουν από τη θέση εργασίας. <br>  2. Προσδιοριστούν με σαφήνεια τα καθήκοντα της θέσης εργασίας. <br>  3. Σχεδιαστούν συστήματα προγραμματισμού στελέχωσης, κατανομής, κινητικότητας και ανάπτυξης του προσωπικού. <br>  4. Αξιολογηθεί η ποιότητα των παρεχόμενων υπηρεσιών της δημόσιας διοίκησης. <br>  5. Σχεδιαστούν μελλοντικές στρατηγικές διαχείρισης προσωπικού, βάσει προβλέψεων μελλοντικών αναγκών και κενών στελέχωσης που τυχόν προκύπτουν. <br>   6. Αναδειχθεί η σημασία του ανθρώπινου κεφαλαίου για τη βιωσιμότητα, τη συνέχεια και την επίτευξη των στόχων των δημοσίων οργανώσεων. <br>   7. Σχεδιαστούν προγράμματα κατάρτισης και επανακατάρτισης του προσωπικού.  <br> 8. Αναπτυχθούν σχέδια υπηρεσιακής εξέλιξης (career paths) στις δημόσιες οργανώσεις.  <br> 9. Αναπτυχθούν συστήματα στοχοθεσίας σε επίπεδο οργανικής μονάδας (Γενική Διεύθυνση, Διεύθυνση, Τμήμα) και υπαλλήλου. <br>  10. Αποσαφηνισθούν οι ρόλοι και τα καθήκοντα των δημοσίων υπαλλήλων με στόχο την καλύτερη διαχείριση των διοικητικών διαδικασιών και τη μείωση της γραφειοκρατίας. <br> 11. Βελτιστοποιηθεί η στρατηγική στελέχωσης για την καλύτερη ανταπόκριση του Ανθρώπινου Δυναμικού στις ανάγκες της Δημόσιας Διοίκησης.' ;
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
