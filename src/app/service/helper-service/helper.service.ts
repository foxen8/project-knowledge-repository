import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private apiService: ApiService) {}
  openDialog(
    isAdd: boolean,
    sectionTitle?: string,
    sectionDescription?: string
  ) {
    sectionTitle = sectionTitle ?? '';
    sectionDescription = sectionDescription ?? '';
    const isDisabled = sectionTitle && sectionTitle !== '';
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
        const input1Element = document.getElementById(
          'input1'
        ) as HTMLInputElement;
        const input1Value = input1Element?.value || sectionTitle;
        const input2Element = document.getElementById(
          'input2'
        ) as HTMLInputElement;
        const input2Value = input2Element?.value || sectionDescription;

        if (!input2Value) {
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
        if (textarea && popup) {
          const textareaHeight = textarea.scrollHeight;
          const popupElement = popup as HTMLElement;
          popupElement.style.minHeight = `${textareaHeight + 500}px`;
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const apiCall = isAdd
          ? this.apiService.addSection()
          : this.apiService.editSection();
        apiCall.subscribe((resp) => {});
      }
    });
  }
}
