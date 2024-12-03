import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  AddGeneralOutlineResponse,
  AddSectionResponse,
  AddUserResponse,
  DeleteJobPositionResponse,
  DeleteSectionResponse,
  DeleteUserResponse,
  EditKnowledgeTitleResponse,
  EditPositionSectionResponse,
  EditSectionResponse,
  GetGeneralOutlinesResponse,
  GetJobPositionsResponse,
  GetPositionsDetailsResponse,
  GetSectionsResponse,
  GetTreeResponse,
  GetUsersResponse,
  UpdateGeneralOutlineResponse,
  UpdateUserResponse,
} from 'src/app/contracts/responses';
import {
  AddGeneralOutlineRequest,
  AddSectionRequest,
  AddUserRequest,
  DeleteJobPositionRequest,
  DeleteSectionRequest,
  DeleteUserRequest,
  EditKnowledgeTitleRequest,
  EditPositionSectionRequest,
  EditSectionRequest,
  GetGeneralOutlinesRequest,
  GetJobPositionsRequest,
  GetPositionsDetailsRequest,
  GetSectionsRequest,
  GetTreeRequest,
  GetUsersRequest,
  UpdateGeneralOutlineRequest,
  UpdateUserRequest,
} from 'src/app/contracts/requests';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}
  getSections(request?: GetSectionsRequest): Observable<GetSectionsResponse> {
    return this.http.post(this.url + '/...', {});
  }
  addSection(request?: AddSectionRequest): Observable<AddSectionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  editSection(request?: EditSectionRequest): Observable<EditSectionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  deleteSection(
    request?: DeleteSectionRequest
  ): Observable<DeleteSectionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getTree(request?: GetTreeRequest): Observable<GetTreeResponse> {
    return this.http.post(this.url + '/...', {});
  }
  deletePositionSection(
    request?: DeleteSectionRequest
  ): Observable<DeleteSectionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  editPositionSection(
    request?: EditPositionSectionRequest
  ): Observable<EditPositionSectionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getPositionsDetails(
    request?: GetPositionsDetailsRequest
  ): Observable<GetPositionsDetailsResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getJobPositions(
    request?: GetJobPositionsRequest
  ): Observable<GetJobPositionsResponse> {
    return this.http.post(this.url + '/...', {});
  }
  deleteJobPosition(
    request?: DeleteJobPositionRequest
  ): Observable<DeleteJobPositionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  addGeneralOutline(
    request?: AddGeneralOutlineRequest
  ): Observable<AddGeneralOutlineResponse> {
    return this.http.post(this.url + '/...', {});
  }
  editKnowledgeTitle(
    request?: EditKnowledgeTitleRequest
  ): Observable<EditKnowledgeTitleResponse> {
    return this.http.post(this.url + '/...', {});
  }
  addUser(request?: AddUserRequest): Observable<AddUserResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getUsers(request?: GetUsersRequest): Observable<GetUsersResponse> {
    return this.http.post(this.url + '/...', {});
  }
  updateUser(request?: UpdateUserRequest): Observable<UpdateUserResponse> {
    return this.http.post(this.url + '/...', {});
  }
  deleteUser(request?: DeleteUserRequest): Observable<DeleteUserResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getGeneralOutlines(
    request?: GetGeneralOutlinesRequest
  ): Observable<GetGeneralOutlinesResponse> {
    return this.http.post(this.url + '/...', {});
  }
  updateGeneralOutline(
    request?: UpdateGeneralOutlineRequest
  ): Observable<UpdateGeneralOutlineResponse> {
    return this.http.post(this.url + '/...', {});
  }
}
