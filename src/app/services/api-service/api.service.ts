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
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = `${environment.apiUrl}`;
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  getSections(request?: GetSectionsRequest): Observable<GetSectionsResponse[]> {
    return this.http.get(this.url + 'homepage', {}) as Observable<
      GetSectionsResponse[]
    >;
  }
  addSection(
    request?: /*AddSectionRequest*/ any
  ): Observable<AddSectionResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(
      this.url + 'homepage/topic/',
      {
        title: request.title,
        description: request.description,
      },
      { headers: headers }
    );
  }
  editSection(
    request?: /*EditSectionRequest*/ any,
    sectionId?: string
  ): Observable<EditSectionResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.put(
      this.url + 'homepage/topic/' + sectionId,
      {
        title: request.title,
        description: request.description,
      },
      { headers: headers }
    );
  }
  deleteSection(sectionId?: string): Observable<DeleteSectionResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.delete(this.url + 'homepage/topic/' + sectionId, {
      headers: headers,
    });
  }
  getJobFamilies(): Observable<any> {
    return this.http.get(this.url + 'jobFamily', {});
  }
  deletePositionSection(
    request?: /*DeleteSectionRequest*/ any
  ): Observable<DeleteSectionResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(this.url + '/...', {
      headers: headers,
    });
  }
  editPositionSection(
    request: /*EditPositionSectionRequest*/ any
  ): Observable<EditPositionSectionResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    let knowledgeCategoryIds = request.knowledgeCategories.map(
      (kc: any) => kc.id
    );

    let generalOutlineIds = request.generalOutlines.map((go: any) => go.id);
    return this.http.put(
      this.url + 'jobFamily/profileRole/' + request.id,
      {
        id: request.id,
        name: request.name,
        description: request.description,
        vision: request.vision,
        socialImpact: request.socialImpact,
        duties: request.duties,
        knowledgeCategoryIds: knowledgeCategoryIds,
        generalOutlineIds: generalOutlineIds,
      },
      { headers: headers }
    );
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
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(
      this.url +
        'generalOutline/' +
        goutlineId +
        '/assign/profileRole/' +
        profileRoleId,
      {
        id: goutlineId,
        profileRoleId: profileRoleId,
      },
      {
        headers: headers,
      }
    );
  }
  editKnowledgeTitle(
    knowledgeCategoryId: string,
    name: string
  ): Observable<EditKnowledgeTitleResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.http.put(
      this.url + 'knowledge/category/' + knowledgeCategoryId,
      {
        name: name,
      },
      { headers: headers }
    );
  }
  addUser(request?: any): Observable<AddUserResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.http.post(
      this.url + 'user',
      {
        vatNo: parseInt(request.vatNo),
        firstName: request.name,
        lastName: request.surname,
        email: request.email,
        roleId: request.role.id,
        isActive: JSON.parse(request.active),
      },
      { headers: headers }
    );
  }
  getUsers(activeUsers?: boolean): Observable<GetUsersResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    let request = {};
    activeUsers !== undefined
      ? (request = { activeUsers: activeUsers })
      : (request = {});

    return this.http.post(this.url + 'user/getAll', request, {
      headers: headers,
    });
  }
  updateUser(userId: any, user: any): Observable<UpdateUserResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.http.put(
      this.url + 'user/' + userId,
      {
        vatNo: parseInt(user.vatNo),
        firstName: user.name,
        lastName: user.surname,
        email: user.email,
        roleId: user.role.id,
        isActive: JSON.parse(user.active),
      },
      { headers: headers }
    );
  }
  deleteUser(userId?: any): Observable<DeleteUserResponse> {
    console.log(userId);
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.http.delete(this.url + 'user/' + userId, { headers: headers });
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
    roleId: any,
    id: any
  ): Observable<UpdateGeneralOutlineResponse> {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(
      this.url + 'generalOutline/' + id + '/assign/profileRole/' + roleId,
      {
        id:id,
        profileRoleId:roleId
      },
      {
        headers: headers,
      }
    );
  }
  getKnowledgeCategories(): Observable<any> {
    return this.http.get(this.url + 'knowledge/category');
  }
  login(): Observable<any> {
    return this.http.post(this.url + 'user/login', {
      gsisToken: 'TempTokenTBD',
    });
  }
  getUserRoles() {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.http.get(this.url + 'user/role', {
      headers: headers,
    });
  }
  getProfileRoles() {
    const token = this.cookieService.get('apiToken');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return this.http.get(this.url + 'jobFamily/profileRole', {
      headers: headers,
    });
  }
}
