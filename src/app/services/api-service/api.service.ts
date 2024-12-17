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
    request: /*EditPositionSectionRequest*/ any
  ): Observable<EditPositionSectionResponse> {
    console.log(request);
    let knowledgeCategoryIds = request.knowledgeCategories.map(
      (kc: any) => kc.id
    );

    let generalOutlineIds = request.generalOutlines.map((go: any) => go.id);
    return this.http.put(this.url + 'jobFamily/profileRole/' + request.id, {
      id: request.id,
      name: request.name,
      description: request.description,
      vision: request.vision,
      socialImpact: request.socialImpact,
      duties: request.duties,
      knowledgeCategoryIds: knowledgeCategoryIds,
      generalOutlineIds: generalOutlineIds,
    });
  }
  getPositionsDetails(
    id: /*GetPositionsDetailsRequest*/ any
  ): Observable</*GetPositionsDetailsResponse*/ any> {
    return this.http.get(this.url + 'jobFamily/details/' + id, {});
  }
  getJobPositions(request?: any): Observable<GetJobPositionsResponse> {
    return this.http.post(this.url + '/...', {});
  }
  deleteJobPosition(request?: any): Observable<DeleteJobPositionResponse> {
    return this.http.post(this.url + '/...', {});
  }
  addGeneralOutline(
    goutlineId: string,
    profileRoleId: string
  ): Observable<AddGeneralOutlineResponse> {
    return this.http.post(
      this.url +
        'generalOutline/' +
        goutlineId +
        '/assign/profileRole/' +
        profileRoleId,
      {
        id: goutlineId,
        profileRoleId: profileRoleId,
      }
    );
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
  getKnowledgeCategories(): Observable<any> {
    return this.http.get(this.url + 'knowledge/category');
  }
}
