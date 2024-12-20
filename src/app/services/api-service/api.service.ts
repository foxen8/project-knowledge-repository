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
    knowledgeCategoryId: string,
    name: string
  ): Observable<EditKnowledgeTitleResponse> {
    return this.http.put(
      this.url + 'knowledge/category/' + knowledgeCategoryId,
      {
        knowledgeCategoryId: knowledgeCategoryId,
        request: { name: name },
      }
    );
  }
  addUser(request?: AddUserRequest): Observable<AddUserResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getUsers(activeUsers?: boolean): Observable<GetUsersResponse> {
    let request = {};
    activeUsers !== undefined
      ? (request = { activeUsers: activeUsers })
      : (request = {});
    return this.http.post(this.url + 'user/getAll', request);
  }
  updateUser(request?: UpdateUserRequest): Observable<UpdateUserResponse> {
    return this.http.post(this.url + '/...', {});
  }
  deleteUser(request?: DeleteUserRequest): Observable<DeleteUserResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getGeneralOutlines(
    unassigned?: boolean
  ): Observable<GetGeneralOutlinesResponse> {
    let params = new HttpParams().set('unassigned', unassigned!);
    return this.http.get(this.url + 'generalOutline', {
      params: params,
    });
  }
  updateGeneralOutline(
    request?: /*UpdateGeneralOutlineRequest*/ any
  ): Observable<UpdateGeneralOutlineResponse> {
    return this.http.post(this.url + '/...', {});
  }
  getKnowledgeCategories(): Observable<any> {
    return this.http.get(this.url + 'knowledge/category');
  }
  login(): Observable<any> {
    return this.http.post(this.url + 'user/login', {
       gsisToken: 'TempTokenTBD',
    });
  }
}
