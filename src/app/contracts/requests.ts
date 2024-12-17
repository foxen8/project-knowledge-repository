export class GetSectionsRequest {
  constructor(public title: string, public description: String) {}
}
export class AddUserRequest {
  constructor(
    public vatNo: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public roleId: number,
    public isActive: boolean
  ) {}
}
export class GetUsersRequest {
  constructor(public activeUsers: boolean) {}
}
export class UpdateUserRequest {
  constructor(public userId: number, public requset: AddUserRequest) {}
}
export class DeleteUserRequest {
  constructor(public userId: number) {}
}
export class GetUserRequest {
  constructor(public userId: number) {}
}
export class LoginRequest {
  constructor(public gsisToken: string) {}
}
export class UpdateKnowledgeCategory {
  constructor(
    public knowledgeCategoryId: number,
    public request: KnowledgeCategoryRequest
  ) {}
}
export class KnowledgeCategoryRequest {
  constructor(public name: string) {}
}
export class GetJobFamilyDetailsRequest {
  constructor(public id: number) {}
}
export class GetProfileRoleRequest {
  constructor(public id: number) {}
}
export class GetProfileRolesRequest {
  constructor(public jobFamilyId: number) {}
}
export class GetGeneralOutlinesRequest {
  constructor(public profileRoleId: number) {}
}
