export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthMutation = {
  __typename?: 'AuthMutation';
  logout: LogoutOutput;
  passRecoveryWithPhone: CoreOutput;
  permission: PermissionMutation;
  refreshToken: RefreshTokenOutput;
  role: RoleMutation;
  sendVerificationCode: CoreOutput;
  setPassword: CoreOutput;
  signup: SignupOutput;
  signupWithPhone: SignupWithPhoneOutput;
};


export type AuthMutationPassRecoveryWithPhoneArgs = {
  input: SetPasswordInput;
};


export type AuthMutationSendVerificationCodeArgs = {
  input: SendVerificationCodeInput;
};


export type AuthMutationSetPasswordArgs = {
  input: SetPasswordInput;
};


export type AuthMutationSignupArgs = {
  input: SignupInput;
};


export type AuthMutationSignupWithPhoneArgs = {
  input: SignupWithPhoneInput;
};

export type AuthQuery = {
  __typename?: 'AuthQuery';
  getProfile: GetProfileOutput;
  permission: PermissionQuery;
  role: RoleQuery;
  sendMail: Scalars['Boolean']['output'];
  signin: SigninOutput;
  signinWithGoogle: SigninOutput;
  signinWithGoogleRedirect: SigninOutput;
  signinWithOtp: SigninOutput;
  validateVerificationCode: CoreOutput;
};


export type AuthQuerySigninArgs = {
  input: SigninInput;
};


export type AuthQuerySigninWithOtpArgs = {
  input: SigninWitOtpInput;
};


export type AuthQueryValidateVerificationCodeArgs = {
  input: ValidateVerificationCodeInput;
};

export type BulkDeletePermissionInput = {
  ids: Array<Scalars['String']['input']>;
};

export type BulkDeleteRoleInput = {
  ids: Array<Scalars['String']['input']>;
};

export type CoreOutput = {
  __typename?: 'CoreOutput';
  success: Scalars['Boolean']['output'];
};

export type CreatePermissionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePermissionOutput = {
  __typename?: 'CreatePermissionOutput';
  success: Scalars['Boolean']['output'];
};

export type CreateRoleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRoleOutput = {
  __typename?: 'CreateRoleOutput';
  success: Scalars['Boolean']['output'];
};

export type CreateTaxonomyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: TaxonomyType;
};

export type CreateTaxonomyOutput = {
  __typename?: 'CreateTaxonomyOutput';
  success: Scalars['Boolean']['output'];
};

export type CreateUserInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  success: Scalars['Boolean']['output'];
};

export type DeletePermissionInput = {
  permissionId: Scalars['String']['input'];
};

export type DeletePermissionOutput = {
  __typename?: 'DeletePermissionOutput';
  success: Scalars['Boolean']['output'];
};

export type DeleteRoleInput = {
  roleId: Scalars['String']['input'];
};

export type DeleteRoleOutput = {
  __typename?: 'DeleteRoleOutput';
  success: Scalars['Boolean']['output'];
};

export type DeleteTaxonomyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteTaxonomyOutput = {
  __typename?: 'DeleteTaxonomyOutput';
  success: Scalars['Boolean']['output'];
};

export type DeleteUserInput = {
  userId: Scalars['String']['input'];
};

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput';
  success: Scalars['Boolean']['output'];
};

export type FindManyPermissionsOutput = {
  __typename?: 'FindManyPermissionsOutput';
  results?: Maybe<Array<PermissionEntity>>;
  success: Scalars['Boolean']['output'];
};

export type FindManyRolesOutput = {
  __typename?: 'FindManyRolesOutput';
  results?: Maybe<Array<RoleEntity>>;
  success: Scalars['Boolean']['output'];
};

export type FindManyUserOutput = {
  __typename?: 'FindManyUserOutput';
  results?: Maybe<Array<UserEntity>>;
  success: Scalars['Boolean']['output'];
};

export type FindPermissionByIdInput = {
  id: Scalars['String']['input'];
};

export type FindPermissionByIdsInput = {
  ids: Array<Scalars['String']['input']>;
};

export type FindPermissionOutput = {
  __typename?: 'FindPermissionOutput';
  result?: Maybe<PermissionEntity>;
  success: Scalars['Boolean']['output'];
};

export type FindRoleByIdInput = {
  id: Scalars['String']['input'];
};

export type FindRoleByIdsInput = {
  ids: Array<Scalars['String']['input']>;
};

export type FindRoleOutput = {
  __typename?: 'FindRoleOutput';
  result?: Maybe<RoleEntity>;
  success: Scalars['Boolean']['output'];
};

export type FindTaxonomyBySlugInput = {
  slug: Scalars['String']['input'];
};

export type FindTaxonomyInput = {
  id: Scalars['String']['input'];
};

export type FindTaxonomyOutput = {
  __typename?: 'FindTaxonomyOutput';
  result?: Maybe<TaxonomyEntity>;
  success: Scalars['Boolean']['output'];
};

export type FindUserByEmailInput = {
  email: Scalars['String']['input'];
};

export type FindUserByIdInput = {
  id: Scalars['String']['input'];
};

export type FindUserByPhoneInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type FindUserOutput = {
  __typename?: 'FindUserOutput';
  result?: Maybe<UserEntity>;
  success: Scalars['Boolean']['output'];
};

export type FindUsersByRoleInput = {
  roleId: Scalars['String']['input'];
};

export type GetProfileOutput = {
  __typename?: 'GetProfileOutput';
  result?: Maybe<UserEntity>;
  success: Scalars['Boolean']['output'];
};

export type LogoutOutput = {
  __typename?: 'LogoutOutput';
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auth: AuthMutation;
  taxonomy: TaxonomyMutation;
  user: UserMutation;
};

export type PermissionEntity = {
  __typename?: 'PermissionEntity';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type PermissionMutation = {
  __typename?: 'PermissionMutation';
  bulkdeletePermission: DeletePermissionOutput;
  createPermission: CreatePermissionOutput;
  deletePermission: DeletePermissionOutput;
  updatePermission: UpdatePermissionOutput;
};


export type PermissionMutationBulkdeletePermissionArgs = {
  input: BulkDeletePermissionInput;
};


export type PermissionMutationCreatePermissionArgs = {
  input: CreatePermissionInput;
};


export type PermissionMutationDeletePermissionArgs = {
  input: DeletePermissionInput;
};


export type PermissionMutationUpdatePermissionArgs = {
  input: UpdatePermissionInput;
};

export type PermissionQuery = {
  __typename?: 'PermissionQuery';
  findPermissionById: FindPermissionOutput;
  findPermissionByIds: FindManyPermissionsOutput;
  searchPermissions: SearchPermissionOutput;
};


export type PermissionQueryFindPermissionByIdArgs = {
  input: FindPermissionByIdInput;
};


export type PermissionQueryFindPermissionByIdsArgs = {
  input: FindPermissionByIdsInput;
};


export type PermissionQuerySearchPermissionsArgs = {
  input: SearchPermissionInput;
};

export type Query = {
  __typename?: 'Query';
  auth: AuthQuery;
  taxonomy: TaxonomyQuery;
  user: UserQuery;
};

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<PermissionEntity>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type RoleMutation = {
  __typename?: 'RoleMutation';
  bulkDeleteRole: DeleteRoleOutput;
  createRole: CreateRoleOutput;
  deleteRole: DeleteRoleOutput;
  updateRole: UpdateRoleOutput;
};


export type RoleMutationBulkDeleteRoleArgs = {
  input: BulkDeleteRoleInput;
};


export type RoleMutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type RoleMutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type RoleMutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};

export type RoleQuery = {
  __typename?: 'RoleQuery';
  findRoleById: FindRoleOutput;
  findRoleByIds: FindManyRolesOutput;
  searchRoles: SearchRoleOutput;
};


export type RoleQueryFindRoleByIdArgs = {
  input: FindRoleByIdInput;
};


export type RoleQueryFindRoleByIdsArgs = {
  input: FindRoleByIdsInput;
};


export type RoleQuerySearchRolesArgs = {
  input: SearchRoleInput;
};

export type SearchPermissionInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type SearchPermissionOutput = {
  __typename?: 'SearchPermissionOutput';
  results?: Maybe<Array<PermissionEntity>>;
  success: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SearchRoleInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type SearchRoleOutput = {
  __typename?: 'SearchRoleOutput';
  results?: Maybe<Array<RoleEntity>>;
  success: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SearchTaxonomyInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TaxonomyType>;
};

export type SearchTaxonomyOutput = {
  __typename?: 'SearchTaxonomyOutput';
  results?: Maybe<Array<TaxonomyEntity>>;
  success: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SearchUserInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type SearchUserOutput = {
  __typename?: 'SearchUserOutput';
  results?: Maybe<Array<UserEntity>>;
  success: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SendVerificationCodeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type SetPasswordInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  verificationCode: Scalars['String']['input'];
};

export type SigninInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type SigninOutput = {
  __typename?: 'SigninOutput';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type SigninWitOtpInput = {
  code: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type SignupInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type SignupOutput = {
  __typename?: 'SignupOutput';
  success: Scalars['Boolean']['output'];
};

export type SignupWithPhoneInput = {
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type SignupWithPhoneOutput = {
  __typename?: 'SignupWithPhoneOutput';
  success: Scalars['Boolean']['output'];
};

export type TaxonomyEntity = {
  __typename?: 'TaxonomyEntity';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  postCount?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: TaxonomyType;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type TaxonomyMutation = {
  __typename?: 'TaxonomyMutation';
  createTaxonomy: CreateTaxonomyOutput;
  deleteTaxonomy: DeleteTaxonomyOutput;
  updateTaxonomy: UpdateTaxonomyOutput;
};


export type TaxonomyMutationCreateTaxonomyArgs = {
  input: CreateTaxonomyInput;
};


export type TaxonomyMutationDeleteTaxonomyArgs = {
  input: DeleteTaxonomyInput;
};


export type TaxonomyMutationUpdateTaxonomyArgs = {
  input: UpdateTaxonomyInput;
};

export type TaxonomyQuery = {
  __typename?: 'TaxonomyQuery';
  findTaxonomyById: FindTaxonomyOutput;
  findTaxonomyBySlug: FindTaxonomyOutput;
  searchTaxonomy: SearchTaxonomyOutput;
};


export type TaxonomyQueryFindTaxonomyByIdArgs = {
  input: FindTaxonomyInput;
};


export type TaxonomyQueryFindTaxonomyBySlugArgs = {
  input: FindTaxonomyBySlugInput;
};


export type TaxonomyQuerySearchTaxonomyArgs = {
  input: SearchTaxonomyInput;
};

export enum TaxonomyType {
  Category = 'CATEGORY',
  Tag = 'TAG'
}

export type UpdatePermissionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  permissionId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePermissionOutput = {
  __typename?: 'UpdatePermissionOutput';
  success: Scalars['Boolean']['output'];
};

export type UpdateRoleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  roleId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleOutput = {
  __typename?: 'UpdateRoleOutput';
  success: Scalars['Boolean']['output'];
};

export type UpdateTaxonomyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TaxonomyType>;
};

export type UpdateTaxonomyOutput = {
  __typename?: 'UpdateTaxonomyOutput';
  success: Scalars['Boolean']['output'];
};

export type UpdateUserInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
};

export type UpdateUserOutput = {
  __typename?: 'UpdateUserOutput';
  success: Scalars['Boolean']['output'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  permissions?: Maybe<Array<PermissionEntity>>;
  phone?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<RoleEntity>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type UserMutation = {
  __typename?: 'UserMutation';
  createUser: CreateUserOutput;
  deleteUser: DeleteUserOutput;
  updateUser: UpdateUserOutput;
};


export type UserMutationCreateUserArgs = {
  input: CreateUserInput;
};


export type UserMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type UserMutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  findUserByEmail: FindUserOutput;
  findUserById: FindUserOutput;
  findUserByPhoneAndIsVerified: CoreOutput;
  findUsersByRole: FindManyUserOutput;
  searchUser: SearchUserOutput;
};


export type UserQueryFindUserByEmailArgs = {
  input: FindUserByEmailInput;
};


export type UserQueryFindUserByIdArgs = {
  input: FindUserByIdInput;
};


export type UserQueryFindUserByPhoneAndIsVerifiedArgs = {
  input: FindUserByPhoneInput;
};


export type UserQueryFindUsersByRoleArgs = {
  input: FindUsersByRoleInput;
};


export type UserQuerySearchUserArgs = {
  input: SearchUserInput;
};

export type ValidateVerificationCodeInput = {
  code: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};
