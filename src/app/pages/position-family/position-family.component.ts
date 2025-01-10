import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HelperService } from '../../services/helper-service/helper.service';
import { ApiService } from '../../services/api-service/api.service';
import { GeneralOutlineModel } from 'src/app/contracts/requests';

@Component({
  selector: 'app-position-family',
  templateUrl: './position-family.component.html',
  styleUrls: ['./position-family.component.scss'],
})
export class PositionFamilyComponent implements OnInit {
  familyName: string | undefined;
  parentName: string | undefined;
  profileRoleId: string | undefined;
  positions: any[] = [];
  displayModal: boolean = false;
  isAdmin: boolean = true;
  jobPositions: Array<any> = [];
  generalOutlines: Array<any> = [];
  showDeleteModal: boolean = false;
  selectedOutline?: GeneralOutlineModel;
  selectedPositionFamily: any;
  allDuties: any[] = [];
  showEditModalBool: boolean = false;
  selectedTitle: string = '';
  selectedDescription: string = '';
  selectedDuty: any;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private helperService: HelperService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.familyName = state?.['familyName'] || '';
    this.parentName = state?.['parentName'] || '';
    this.profileRoleId = state?.['id'] || '';
  }
  ngOnInit(): void {
    this.getPositionDetails();
    this.getGeneralOutlines();
  }

  onChipClick(selectedChip: GeneralOutlineModel, event: Event): void {
    this.selectedOutline = selectedChip;
    if ((event.target as HTMLElement).classList.contains('pi-times')) {
      return;
    }

    this.displayModal = true;
  }
  addSkill(position: any) {
    // this.selectedPositionFamily = position;
    this.selectedDescription = '';
    this.showEditModalBool = true;
    this.selectedTitle = 'Προσθήκη Καθήκοντος';
  }
  showEditModal(
    sectionTitle: string,
    sectionDescription: string,
    position: any,
    duty?: any
  ) {
    this.selectedPositionFamily = position;
    this.showEditModalBool = true;
    this.selectedTitle = sectionTitle;
    this.selectedDescription = sectionDescription;
    this.selectedDuty = duty;
  }
  onDutyDelete(duty: any) {
    const index = this.selectedPositionFamily.duties.findIndex(
      (d: any) => d.id === duty.id
    );
    this.selectedPositionFamily.duties.splice(index, 1);
    this.apiService.editPositionSection(this.selectedPositionFamily).subscribe(
      (resp) => {
        this.getPositionDetails();
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
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

        if (popup) {
          const popupElement = popup as HTMLElement;
          popupElement.style.minHeight = `${500}px`;
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService
          .addGeneralOutline(
            result.value.selectedOutline.id,
            this.selectedPositionFamily.id
          )
          .subscribe(
            (resp) => {
              this.getPositionDetails();
            },
            (error) => {
              this.helperService.errorHandle(error);
            }
          );
      }
    });
  }
  getGeneralOutlines() {
    this.apiService.getGeneralOutlines(true).subscribe(
      (resp: any) => {
        this.generalOutlines = resp;
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
  }
  getPositionDetails() {
    this.apiService.getPositionsDetails(this.profileRoleId).subscribe(
      (resp) => {
        this.positions = resp.profileRoles;
        this.selectedPositionFamily = this.positions[0];
        this.allDuties = this.positions.flatMap((item) => item.duties);
        this.jobPositions = [];
        resp.profileRoles[0].generalOutlines.forEach((g: any) => {
          this.jobPositions.push(g);
        });
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
  }
  handleSave(event: any) {
    if (event.title == 'Όραμα') {
      this.selectedPositionFamily.vision = event.description;
    } else if (event.title == 'Περιγραφή Ρόλου') {
      this.selectedPositionFamily.description = event.description;
    } else if (event.title == 'Αντίκτυπος στους Πολίτες') {
      this.selectedPositionFamily.socialImpact = event.description;
    } else if (event.title == 'Επεξεργασία Καθήκοντος') {
      const duty = this.selectedPositionFamily.duties.find(
        (duty: any) => duty.id == this.selectedDuty.id
      );
      if (duty) {
        duty.description = event.description;
      }
    } else if (event.title == 'Προσθήκη Καθήκοντος') {
      this.selectedPositionFamily.duties.push({
        description: event.description,
      });
    }

    this.apiService.editPositionSection(this.selectedPositionFamily).subscribe(
      (resp) => {
        this.getPositionDetails();
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
    this.showEditModalBool = false;
  }
  handleRemove(position: any, event: Event): void {
    event.stopPropagation();
    const index = this.selectedPositionFamily.generalOutlines.findIndex(
      (g: any) => g.id === position.id
    );
    this.selectedPositionFamily.generalOutlines.splice(index, 1);
    console.log(this.selectedPositionFamily.generalOutlines);
    this.apiService.editPositionSection(this.selectedPositionFamily).subscribe(
      (resp) => {
        this.getPositionDetails();
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
  }
  onPageChange(event: any) {
    const currentIndex = event.page; // Get the active index
    this.selectedPositionFamily = this.positions[currentIndex];
  }
}
