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
  AddUserRequest,
  DeleteUserRequest,
  GetGeneralOutlinesRequest,
  GetSectionsRequest,
  GetUsersRequest,
  UpdateUserRequest,
} from 'src/app/contracts/requests';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}
  getSections(request?: GetSectionsRequest): Observable<GetSectionsResponse[]> {
    return this.http.get(this.url + 'homepage', {}) as Observable<
      GetSectionsResponse[]
    >;
  }
  addSection(
    request?: /*AddSectionRequest*/ any
  ): Observable<AddSectionResponse> {
    return this.http.post(this.url + 'homepage/topic/', {
      title: request.title,
      description: request.description,
    });
  }
  editSection(
    request?: /*EditSectionRequest*/ any,
    sectionId?: string
  ): Observable<EditSectionResponse> {
    return this.http.put(this.url + 'homepage/topic/' + sectionId, {
      title: request.title,
      description: request.description,
    });
  }
  deleteSection(sectionId?: string): Observable<DeleteSectionResponse> {
    return this.http.delete(this.url + 'homepage/topic/' + sectionId);
  }
  getJobFamilies(): Observable<any> {
    return this.http.get(this.url + 'jobFamily', {});
  }
  deletePositionSection(
    request?: /*DeleteSectionRequest*/ any
  ): Observable<DeleteSectionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  editPositionSection(
    request?: /*EditPositionSectionRequest*/ any
  ): Observable<EditPositionSectionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getPositionsDetails(
    id: /*GetPositionsDetailsRequest*/ any
  ): Observable</*GetPositionsDetailsResponse*/any> {
    return this.http.get(this.url + 'jobFamily/details/'+id, {});
  }
  getJobPositions(
    request?: /*GetJobPositionsRequest*/ any
  ): Observable<GetJobPositionsResponse> {
    return this.http.post(this.url + '/...', {});
  }
  deleteJobPosition(
    request?: /*DeleteJobPositionRequest*/ any
  ): Observable<DeleteJobPositionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  addGeneralOutline(
    request?: /*AddGeneralOutlineRequest*/ any
  ): Observable<AddGeneralOutlineResponse> {
    return this.http.post(this.url + '/...', {});
  }
  editKnowledgeTitle(
    request?: /*EditKnowledgeTitleRequest*/ any
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
    request?: /*UpdateGeneralOutlineRequest*/ any
  ): Observable<UpdateGeneralOutlineResponse> {
    return this.http.post(this.url + '/...', {});
  }
}
