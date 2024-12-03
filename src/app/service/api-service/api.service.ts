import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}
  getSections() {
    return this.http.post(this.url + '/...', {});
  }
  addSection() {
    return this.http.post(this.url + '/...', {});
  }
  editSection() {
    return this.http.post(this.url + '/...', {});
  }
  deleteSection() {
    return this.http.post(this.url + '/...', {});
  }
  getTree() {
    return this.http.post(this.url + '/...', {});
  }
  deletePositionSection() {
    return this.http.post(this.url + '/...', {});
  }
  editPositionSection() {
    return this.http.post(this.url + '/...', {});
  }
  getPositionsDetails() {
    return this.http.post(this.url + '/...', {});
  }
  getJobPositions() {
    return this.http.post(this.url + '/...', {});
  }
  deleteJobPosition(position: any) {
    return this.http.post(this.url + '/...', {});
  }
  addGeneralOutline(gOutline: any) {
    return this.http.post(this.url + '/...', {});
  }
  editKnowledgeTitle(title: string) {
    return this.http.post(this.url + '/...', {});
  }
  addUser(user: any) {
    return this.http.post(this.url + '/...', {});
  }
  getUsers() {
    return this.http.post(this.url + '/...', {});
  }
  updateUser(user: any) {
    return this.http.post(this.url + '/...', {});
  }
  deleteUser() {
    return this.http.post(this.url + '/...', {});
  }
  getGeneralOutlines() {
    return this.http.post(this.url + '/...', {});
  }
  updateGeneralOutline(gOutline: any) {
    return this.http.post(this.url + '/...', {});
  }
}
