import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { HelperService } from '../../services/helper-service/helper.service';
import { ApiService } from '../../services/api-service/api.service';
import {
  AddSectionResponse,
  EditSectionResponse,
  GetSectionsResponse,
} from 'src/app/contracts/responses';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  isAdmin = true;
  @ViewChildren('section') sectionElements!: QueryList<ElementRef>;
  currentSection = 0;
  sections: GetSectionsResponse[] = [];
  showDeleteModal: boolean = false;
  selectedSection: GetSectionsResponse = { id: '', description: '', title: '' };
  showAddEditModal: boolean = false;
  modalHeader: string = 'Επεξεργασία Ενότητας';
  constructor(
    private helperService: HelperService,
    private apiService: ApiService,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.login();
    this.getSections();
  }
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = this.sectionElements
              .toArray()
              .findIndex((el) => el.nativeElement === entry.target);
            this.currentSection = index;
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );
    this.sectionElements.forEach((section) =>
      observer.observe(section.nativeElement)
    );
  }
  login() {
    this.apiService.login().subscribe(
      (apiToken) => {
        this.cookieService.set('apiToken', apiToken.token);
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
  }
  toggleContentFlag() {
    this.isAdmin = !this.isAdmin;
  }
  addSection() {
    this.showAddEditModal = true;
    this.selectedSection = { title: '', description: '', id: '' };
    this.modalHeader = 'Προσθήκη Ενότητας';
  }
  editSection(section: any) {
    this.showAddEditModal = true;
    this.modalHeader = 'Επεξεργασία Ενότητας';
    this.selectedSection = section;
  }

  scrollToSection(index: number): void {
    const section = this.sectionElements.toArray()[index];
    if (section) {
      const offset = 60;
      const topPosition = section.nativeElement.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }
  onDelete(section: any) {
    this.selectedSection = section;
    this.showDeleteModal = true;
  }
  getSections() {
    this.apiService.getSections().subscribe(
      (resp) => {
        this.sections = resp;
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
  }
  handleCancel() {
    this.showDeleteModal = false;
  }
  handleDelete(event: any) {
    this.apiService.deleteSection(this.selectedSection?.id).subscribe(
      (resp) => {
        this.getSections();
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
  }
  handleSave(event: any) {
    event.isAdd
      ? this.apiService.addSection(event).subscribe(
          (resp: AddSectionResponse) => {
            this.getSections();
          },
          (error) => {
            this.helperService.errorHandle(error);
          }
        )
      : this.apiService.editSection(event, this.selectedSection.id).subscribe(
          (resp: AddSectionResponse) => {
            this.getSections();
          },
          (error) => {
            this.helperService.errorHandle(error);
          }
        );
    this.showAddEditModal = false;
  }
}
