import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private cookieService: CookieService) {}
  openDialog(
    isAdd: boolean,
    sectionTitle?: string,
    sectionDescription?: string
  ): Promise<{ title: string; description: string } | null> {
    sectionTitle = sectionTitle ?? '';
    sectionDescription = sectionDescription ?? '';
    const isDisabled = sectionTitle && sectionTitle !== '';
    const htmlContent = `
      <div style="text-align: left;">
        <label for="title" style="display: block; margin-bottom: 0.5em; font-size: 30px; font-weight: bold;">Τίτλος</label>
        ${
          !isDisabled
            ? `<input type="text" id="title" class="swal2-input" placeholder="Τίτλος Ενότητας" value="${sectionTitle}" style="width: 90%;">`
            : `<h3>${sectionTitle}</h3>`
        }
        <label for="description" style="display: block; margin-top: 1em; margin-bottom: 0.5em; font-size: 30px; font-weight: bold;">Περιγραφή Ενότητας</label>
        <textarea id="description" class="swal2-textarea" placeholder="Συμπληρώστε την περιγραφή της ενότητας" style="width: 90%; height: 500px;">${sectionDescription}</textarea>
      </div>`;
    return Swal.fire({
      title: isDisabled ? 'Επεξεργασία Ενότητας' : 'Προσθήκη Ενότητας',
      html: htmlContent,
      showCancelButton: true,
      width: '1400px',
      confirmButtonText: 'Αποθήκευση',
      confirmButtonColor: '#003366',
      cancelButtonText: 'Ακύρωση',
      focusConfirm: false,
      allowEscapeKey: true,
      preConfirm: () => {
        const titleElement = document.getElementById(
          'title'
        ) as HTMLInputElement;
        const titleValue = titleElement?.value || sectionTitle;
        const descriptionElement = document.getElementById(
          'description'
        ) as HTMLInputElement;
        const descriptionValue =
          descriptionElement?.value || sectionDescription;

        if (!descriptionValue) {
          Swal.showValidationMessage('Παρακαλώ συμπληρώστε και τα δύο πεδία');
          return;
        }
        return { title: titleValue, description: descriptionValue };
      },
      willOpen: () => {
        const popup = document.querySelector('.swal2-popup');
        const textarea = document.querySelector(
          '.swal2-textarea'
        ) as HTMLElement;
        if (textarea && popup) {
          const textareaHeight = textarea.scrollHeight;
          const popupElement = popup as HTMLElement;
          popupElement.style.minHeight = `${textareaHeight + 500}px`;
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        return result.value;
      }
      return null; // Return null if canceled
    });
  }
  public errorHandle(error: any): void {
    let txt = '';
    if (error.error != null && error.error != undefined) {
      txt = this.extractTitles(error.error);
    }
    if (error.status == 401) {
      txt = 'Έληξε το token';
      // this.oauthService.initCodeFlow(); ξανακανει Login
    } else if (error.status == 403) {
      txt = 'Δεν έχετε δικαιώματα για τη συγκεκριμένη ενέργεια';
    } else if (error.status == 404) {
      txt = '';
    } else if (
      error.status == 500 &&
      Object.keys(error.error.errors)[0] == 'WP-T-U-03'
    ) {
      this.cookieService.delete('apiToken');
      // this.oauthService.logOut(); κανε Logout
      txt = 'Ο χρήστης δεν έχει τα απαραίτητα δικαιώματα.';
    }
    Swal.fire({
      title: 'Κάτι πήγε στραβά!',
      text: txt,
      icon: 'error',
      denyButtonText: 'OK',
      showDenyButton: true,
      showConfirmButton: false,
    });
  }
  public extractTitles(errorObj: any, divider: string = ' | '): string {
    let txt: string = '';
    for (const key in errorObj.errors) {
      if (errorObj.errors.hasOwnProperty(key)) {
        const errorList = errorObj.errors[key];
        const titles = errorList
          .map((errorItem: any) => errorItem.title)
          .join(divider);
        if (txt) {
          txt += divider + titles;
        } else {
          txt = titles;
        }
      }
    }
    return txt;
  }
}
