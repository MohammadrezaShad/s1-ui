export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {[_ in K]?: never};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
  Upload: {input: any; output: any};
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

export type BookmarkEntity = {
  __typename?: 'BookmarkEntity';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  post: PostOutput;
  type: CollectionName;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserOutputType>;
};

export type BookmarkResponse = {
  __typename?: 'BookmarkResponse';
  findBookmarkById: FindBookmarkOutput;
  findBookmarkByIds: FindBookmarksOutput;
  searchBookmark: SearchBookmarkOutput;
};

export type BookmarkResponseFindBookmarkByIdArgs = {
  input: FindBookmarkInput;
};

export type BookmarkResponseFindBookmarkByIdsArgs = {
  input: FindBookmarksInput;
};

export type BookmarkResponseSearchBookmarkArgs = {
  input: SearchBookmarkInput;
};

export enum BooleanEnum {
  False = 'FALSE',
  True = 'TRUE',
}

export type BulkDeleteBusinessInput = {
  ids: Array<Scalars['String']['input']>;
};

export type BulkDeletePermissionInput = {
  ids: Array<Scalars['String']['input']>;
};

export type BulkDeleteRoleInput = {
  ids: Array<Scalars['String']['input']>;
};

export type BusinessEntity = {
  __typename?: 'BusinessEntity';
  _id: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  businessScore?: Maybe<ReviewRateDetailType>;
  businessScoreDetail?: Maybe<VotesDetail>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  favoriteCount?: Maybe<Scalars['Float']['output']>;
  images?: Maybe<Array<ImageType>>;
  isUserBookmark?: Maybe<Scalars['Boolean']['output']>;
  isUserFavorite?: Maybe<Scalars['Boolean']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  long?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  taxonomies?: Maybe<Array<TaxonomyEntity>>;
  thumbnail?: Maybe<ImageType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserOutputType>;
  userBusinessScore?: Maybe<Scalars['Float']['output']>;
  webAddress?: Maybe<Scalars['String']['output']>;
  workHour?: Maybe<Array<WorkHourType>>;
};

export type BusinessMutation = {
  __typename?: 'BusinessMutation';
  bulkDeleteBusiness: DeleteBusinessOutput;
  createBusiness: CreateBusinessOutput;
  deleteBusiness: DeleteBusinessOutput;
  deleteOneBusiness: DeleteBusinessOutput;
  updateBusiness: UpdateBusinessOutput;
  updateOneBusiness: UpdateBusinessOutput;
};

export type BusinessMutationBulkDeleteBusinessArgs = {
  input: BulkDeleteBusinessInput;
};

export type BusinessMutationCreateBusinessArgs = {
  input: CreateBusinessInput;
};

export type BusinessMutationDeleteBusinessArgs = {
  input: DeleteBusinessInput;
};

export type BusinessMutationDeleteOneBusinessArgs = {
  input: DeleteBusinessInput;
};

export type BusinessMutationUpdateBusinessArgs = {
  input: UpdateBusinessInput;
};

export type BusinessMutationUpdateOneBusinessArgs = {
  input: UpdateBusinessInput;
};

export type BusinessQuery = {
  __typename?: 'BusinessQuery';
  findBusinessById: FindBusinessOutput;
  findBusinessByIds: FindManyBusinessOutput;
  searchBusiness: SearchBusinessOutput;
};

export type BusinessQueryFindBusinessByIdArgs = {
  input: FindBusinessByIdInput;
};

export type BusinessQueryFindBusinessByIdsArgs = {
  input: FindBusinessByIdsInput;
};

export type BusinessQuerySearchBusinessArgs = {
  input: SearchBusinessInput;
};

export enum CollectionName {
  Bookmark = 'BOOKMARK',
  Business = 'BUSINESS',
  Favorite = 'FAVORITE',
  Image = 'IMAGE',
  Otp = 'OTP',
  Permission = 'PERMISSION',
  Review = 'REVIEW',
  Role = 'ROLE',
  Taxonomy = 'TAXONOMY',
  User = 'USER',
  Video = 'VIDEO',
  VisitStatistics = 'VISIT_STATISTICS',
}

export type CoreOutput = {
  __typename?: 'CoreOutput';
  success: Scalars['Boolean']['output'];
};

export type CreateAdminReviewInput = {
  content: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['String']['input']>;
  post: Scalars['String']['input'];
  type: ReviewType;
};

export type CreateBookmarkInput = {
  post: Scalars['String']['input'];
  type: CollectionName;
};

export type CreateBookmarkOutput = {
  __typename?: 'CreateBookmarkOutput';
  success: Scalars['Boolean']['output'];
};

export type CreateBusinessInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  taxonomies?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  webAddress?: InputMaybe<Scalars['String']['input']>;
  workHour?: InputMaybe<Array<WorkHour>>;
};

export type CreateBusinessOutput = {
  __typename?: 'CreateBusinessOutput';
  businessId: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateFavoriteInput = {
  post: Scalars['String']['input'];
  type: CollectionName;
};

export type CreateFavoriteOutput = {
  __typename?: 'CreateFavoriteOutput';
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

export type CreateReviewInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['String']['input']>;
  post: Scalars['String']['input'];
  score: Scalars['Float']['input'];
  type: ReviewType;
};

export type CreateReviewOutput = {
  __typename?: 'CreateReviewOutput';
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
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
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

export type DeleteBookmarkInput = {
  id: Scalars['String']['input'];
};

export type DeleteBookmarkOutput = {
  __typename?: 'DeleteBookmarkOutput';
  success: Scalars['Boolean']['output'];
};

export type DeleteBookmarksInput = {
  ids: Array<Scalars['String']['input']>;
};

export type DeleteBusinessInput = {
  id: Scalars['String']['input'];
};

export type DeleteBusinessOutput = {
  __typename?: 'DeleteBusinessOutput';
  success: Scalars['Boolean']['output'];
};

export type DeleteFavoriteInput = {
  id: Scalars['String']['input'];
};

export type DeleteFavoriteOutput = {
  __typename?: 'DeleteFavoriteOutput';
  success: Scalars['Boolean']['output'];
};

export type DeleteFavoritesInput = {
  ids: Array<Scalars['String']['input']>;
};

export type DeleteImageInput = {
  id: Scalars['String']['input'];
};

export type DeleteImageOutput = {
  __typename?: 'DeleteImageOutput';
  success: Scalars['Boolean']['output'];
};

export type DeleteManyReviewInput = {
  ids: Array<Scalars['String']['input']>;
};

export type DeleteOneBookmarkInput = {
  postId: Scalars['String']['input'];
};

export type DeleteOneFavoriteInput = {
  postId: Scalars['String']['input'];
};

export type DeletePermissionInput = {
  permissionId: Scalars['String']['input'];
};

export type DeletePermissionOutput = {
  __typename?: 'DeletePermissionOutput';
  success: Scalars['Boolean']['output'];
};

export type DeleteReviewInput = {
  id: Scalars['String']['input'];
};

export type DeleteReviewOutput = {
  __typename?: 'DeleteReviewOutput';
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

export type EditReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  score?: InputMaybe<Scalars['Float']['input']>;
};

export type EditReviewOutput = {
  __typename?: 'EditReviewOutput';
  success: Scalars['Boolean']['output'];
};

export type FavoriteEntity = {
  __typename?: 'FavoriteEntity';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  post: PostOutput;
  type: CollectionName;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserOutputType>;
};

export type FavoriteResponse = {
  __typename?: 'FavoriteResponse';
  findFavoriteById: FindFavoriteOutput;
  findFavoriteByIds: FindFavoritesOutput;
  searchFavorite: SearchFavoriteOutput;
};

export type FavoriteResponseFindFavoriteByIdArgs = {
  input: FindFavoriteInput;
};

export type FavoriteResponseFindFavoriteByIdsArgs = {
  input: FindFavoritesInput;
};

export type FavoriteResponseSearchFavoriteArgs = {
  input: SearchFavoriteInput;
};

export type FindBookmarkInput = {
  id: Scalars['String']['input'];
};

export type FindBookmarkOutput = {
  __typename?: 'FindBookmarkOutput';
  result?: Maybe<BookmarkEntity>;
  success: Scalars['Boolean']['output'];
};

export type FindBookmarksInput = {
  ids: Array<Scalars['String']['input']>;
};

export type FindBookmarksOutput = {
  __typename?: 'FindBookmarksOutput';
  results?: Maybe<Array<BookmarkEntity>>;
  success: Scalars['Boolean']['output'];
};

export type FindBusinessByIdInput = {
  id: Scalars['String']['input'];
};

export type FindBusinessByIdsInput = {
  ids: Array<Scalars['String']['input']>;
};

export type FindBusinessOutput = {
  __typename?: 'FindBusinessOutput';
  result?: Maybe<BusinessEntity>;
  success: Scalars['Boolean']['output'];
};

export type FindFavoriteInput = {
  id: Scalars['String']['input'];
};

export type FindFavoriteOutput = {
  __typename?: 'FindFavoriteOutput';
  result?: Maybe<FavoriteEntity>;
  success: Scalars['Boolean']['output'];
};

export type FindFavoritesInput = {
  ids: Array<Scalars['String']['input']>;
};

export type FindFavoritesOutput = {
  __typename?: 'FindFavoritesOutput';
  results?: Maybe<Array<FavoriteEntity>>;
  success: Scalars['Boolean']['output'];
};

export type FindManyBusinessOutput = {
  __typename?: 'FindManyBusinessOutput';
  results?: Maybe<Array<BusinessEntity>>;
  success: Scalars['Boolean']['output'];
};

export type FindManyPermissionsOutput = {
  __typename?: 'FindManyPermissionsOutput';
  results?: Maybe<Array<PermissionEntity>>;
  success: Scalars['Boolean']['output'];
};

export type FindManyReviewByPostInput = {
  post: Scalars['String']['input'];
};

export type FindManyReviewInput = {
  ids: Array<Scalars['String']['input']>;
};

export type FindManyReviewOutput = {
  __typename?: 'FindManyReviewOutput';
  results?: Maybe<Array<ReviewEntity>>;
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

export type FindReviewInput = {
  id: Scalars['String']['input'];
};

export type FindReviewOutput = {
  __typename?: 'FindReviewOutput';
  result?: Maybe<ReviewEntity>;
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

export type FindTaxonomyByIdsInput = {
  ids: Array<Scalars['String']['input']>;
};

export type FindTaxonomyByIdsOutput = {
  __typename?: 'FindTaxonomyByIdsOutput';
  results?: Maybe<Array<TaxonomyEntity>>;
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

export type GetVotesDetailInput = {
  post?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ReviewType>;
};

export type ImageMutation = {
  __typename?: 'ImageMutation';
  deleteImage: DeleteImageOutput;
  updateImage: UpdateImageOutput;
  uploadImage: UploadImageOutput;
};

export type ImageMutationDeleteImageArgs = {
  input: DeleteImageInput;
};

export type ImageMutationUpdateImageArgs = {
  input: UpdateImageInput;
};

export type ImageMutationUploadImageArgs = {
  file: Scalars['Upload']['input'];
  input?: InputMaybe<UploadImageInputType>;
};

export type ImageQuery = {
  __typename?: 'ImageQuery';
  searchImage: SearchImagesOutput;
};

export type ImageQuerySearchImageArgs = {
  input: SearchImagesInput;
};

export type ImageType = {
  __typename?: 'ImageType';
  _id: Scalars['String']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  preview: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  width: Scalars['Float']['output'];
};

export type LogoutOutput = {
  __typename?: 'LogoutOutput';
  success: Scalars['Boolean']['output'];
};

export type MutateBookmarkResponse = {
  __typename?: 'MutateBookmarkResponse';
  bulkDeleteBookmark: DeleteBookmarkOutput;
  createBookmark: CreateBookmarkOutput;
  deleteBookmark: DeleteBookmarkOutput;
  deleteOneBookmark: DeleteBookmarkOutput;
};

export type MutateBookmarkResponseBulkDeleteBookmarkArgs = {
  input: DeleteBookmarksInput;
};

export type MutateBookmarkResponseCreateBookmarkArgs = {
  input: CreateBookmarkInput;
};

export type MutateBookmarkResponseDeleteBookmarkArgs = {
  input: DeleteBookmarkInput;
};

export type MutateBookmarkResponseDeleteOneBookmarkArgs = {
  input: DeleteOneBookmarkInput;
};

export type MutateFavoriteResponse = {
  __typename?: 'MutateFavoriteResponse';
  bulkDeleteFavorite: DeleteFavoriteOutput;
  createFavorite: CreateFavoriteOutput;
  deleteFavorite: DeleteFavoriteOutput;
  deleteOneFavorite: DeleteFavoriteOutput;
};

export type MutateFavoriteResponseBulkDeleteFavoriteArgs = {
  input: DeleteFavoritesInput;
};

export type MutateFavoriteResponseCreateFavoriteArgs = {
  input: CreateFavoriteInput;
};

export type MutateFavoriteResponseDeleteFavoriteArgs = {
  input: DeleteFavoriteInput;
};

export type MutateFavoriteResponseDeleteOneFavoriteArgs = {
  input: DeleteOneFavoriteInput;
};

export type MutateReviewResponse = {
  __typename?: 'MutateReviewResponse';
  bulkDeleteReview: DeleteReviewOutput;
  createAdminReview: CreateReviewOutput;
  createReview: CreateReviewOutput;
  deleteReview: DeleteReviewOutput;
  editReview: EditReviewOutput;
  removeReview: DeleteReviewOutput;
  updateReview: UpdateReviewOutput;
};

export type MutateReviewResponseBulkDeleteReviewArgs = {
  input: DeleteManyReviewInput;
};

export type MutateReviewResponseCreateAdminReviewArgs = {
  input: CreateAdminReviewInput;
};

export type MutateReviewResponseCreateReviewArgs = {
  input: CreateReviewInput;
};

export type MutateReviewResponseDeleteReviewArgs = {
  input: DeleteReviewInput;
};

export type MutateReviewResponseEditReviewArgs = {
  input: EditReviewInput;
};

export type MutateReviewResponseRemoveReviewArgs = {
  input: RemoveReviewInput;
};

export type MutateReviewResponseUpdateReviewArgs = {
  input: UpdateReviewInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth: AuthMutation;
  bookmark: MutateBookmarkResponse;
  business: BusinessMutation;
  favorite: MutateFavoriteResponse;
  image: ImageMutation;
  review: MutateReviewResponse;
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
  bulkDeletePermission: DeletePermissionOutput;
  createPermission: CreatePermissionOutput;
  deletePermission: DeletePermissionOutput;
  updatePermission: UpdatePermissionOutput;
};

export type PermissionMutationBulkDeletePermissionArgs = {
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

export type PostOutput = {
  __typename?: 'PostOutput';
  businessEntity?: Maybe<BusinessEntity>;
};

export type Query = {
  __typename?: 'Query';
  auth: AuthQuery;
  bookmark: BookmarkResponse;
  business: BusinessQuery;
  favorite: FavoriteResponse;
  image: ImageQuery;
  review: ReviewQuery;
  taxonomy: TaxonomyQuery;
  user: UserQuery;
};

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type RemoveReviewInput = {
  id: Scalars['String']['input'];
};

export type ReviewEntity = {
  __typename?: 'ReviewEntity';
  _id: Scalars['String']['output'];
  approved?: Maybe<BooleanEnum>;
  author?: Maybe<Scalars['String']['output']>;
  authorEmail?: Maybe<Scalars['String']['output']>;
  childs?: Maybe<Array<ReviewEntity>>;
  content: Scalars['String']['output'];
  createUser?: Maybe<UserOutputType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<ReviewEntity>;
  post: PostOutput;
  score: Scalars['Float']['output'];
  type: ReviewType;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ReviewQuery = {
  __typename?: 'ReviewQuery';
  findReviewById: FindReviewOutput;
  findReviewByIds: FindManyReviewOutput;
  findReviewByPost: FindManyReviewOutput;
  getVotesDetail: Array<VotesDetail>;
  searchReview: SearchReviewOutput;
};

export type ReviewQueryFindReviewByIdArgs = {
  input: FindReviewInput;
};

export type ReviewQueryFindReviewByIdsArgs = {
  input: FindManyReviewInput;
};

export type ReviewQueryFindReviewByPostArgs = {
  input: FindManyReviewByPostInput;
};

export type ReviewQueryGetVotesDetailArgs = {
  input: GetVotesDetailInput;
};

export type ReviewQuerySearchReviewArgs = {
  input: SearchReviewInput;
};

export type ReviewRateDetailType = {
  __typename?: 'ReviewRateDetailType';
  bestRating?: Maybe<Scalars['Float']['output']>;
  ratingCount?: Maybe<Scalars['Float']['output']>;
  ratingValue?: Maybe<Scalars['Float']['output']>;
  worstRating?: Maybe<Scalars['Float']['output']>;
};

export enum ReviewType {
  Business = 'BUSINESS',
}

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

export type Score = {
  __typename?: 'Score';
  percent?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  votesCount?: Maybe<Scalars['Float']['output']>;
};

export type SearchBookmarkInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<CollectionName>;
};

export type SearchBookmarkOutput = {
  __typename?: 'SearchBookmarkOutput';
  results?: Maybe<Array<BookmarkEntity>>;
  success: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SearchBusinessInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  taxonomies?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type SearchBusinessOutput = {
  __typename?: 'SearchBusinessOutput';
  results?: Maybe<Array<BusinessEntity>>;
  success: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SearchFavoriteInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<CollectionName>;
};

export type SearchFavoriteOutput = {
  __typename?: 'SearchFavoriteOutput';
  results?: Maybe<Array<FavoriteEntity>>;
  success: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SearchImagesInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type SearchImagesOutput = {
  __typename?: 'SearchImagesOutput';
  results?: Maybe<Array<ImageType>>;
  success: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
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

export type SearchReviewInput = {
  approved?: InputMaybe<BooleanEnum>;
  author?: InputMaybe<Scalars['String']['input']>;
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ReviewType>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type SearchReviewOutput = {
  __typename?: 'SearchReviewOutput';
  results?: Maybe<Array<ReviewEntity>>;
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
  findTaxonomyByIds: FindTaxonomyByIdsOutput;
  findTaxonomyBySlug: FindTaxonomyOutput;
  searchTaxonomy: SearchTaxonomyOutput;
};

export type TaxonomyQueryFindTaxonomyByIdArgs = {
  input: FindTaxonomyInput;
};

export type TaxonomyQueryFindTaxonomyByIdsArgs = {
  input: FindTaxonomyByIdsInput;
};

export type TaxonomyQueryFindTaxonomyBySlugArgs = {
  input: FindTaxonomyBySlugInput;
};

export type TaxonomyQuerySearchTaxonomyArgs = {
  input: SearchTaxonomyInput;
};

export enum TaxonomyType {
  Category = 'CATEGORY',
  Tag = 'TAG',
}

export type TimeRange = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type TimeRangeType = {
  __typename?: 'TimeRangeType';
  from?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type UpdateBusinessInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  taxonomies?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  webAddress?: InputMaybe<Scalars['String']['input']>;
  workHour?: InputMaybe<Array<WorkHour>>;
};

export type UpdateBusinessOutput = {
  __typename?: 'UpdateBusinessOutput';
  success: Scalars['Boolean']['output'];
};

export type UpdateImageInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateImageOutput = {
  __typename?: 'UpdateImageOutput';
  success: Scalars['Boolean']['output'];
};

export type UpdatePermissionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  permissionId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePermissionOutput = {
  __typename?: 'UpdatePermissionOutput';
  success: Scalars['Boolean']['output'];
};

export type UpdateReviewInput = {
  approved?: InputMaybe<BooleanEnum>;
  author?: InputMaybe<Scalars['String']['input']>;
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createUser?: InputMaybe<UserOutputInputType>;
  id: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReviewOutput = {
  __typename?: 'UpdateReviewOutput';
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
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
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

export type UploadImageInputType = {
  alt?: InputMaybe<Scalars['String']['input']>;
};

export type UploadImageOutput = {
  __typename?: 'UploadImageOutput';
  imageId: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  _id: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  bookmarks?: Maybe<Array<BookmarkEntity>>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  favorites?: Maybe<Array<FavoriteEntity>>;
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

export type UserOutputInputType = {
  _id: Scalars['String']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  roles: Array<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type UserOutputType = {
  __typename?: 'UserOutputType';
  _id: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  roles: Array<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
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

export type VotesDetail = {
  __typename?: 'VotesDetail';
  post?: Maybe<Scalars['String']['output']>;
  scoreGroup?: Maybe<Array<Score>>;
  totalVotesCount?: Maybe<Scalars['Float']['output']>;
};

export type WorkHour = {
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  open24Hours?: InputMaybe<Scalars['Boolean']['input']>;
  timeRanges?: InputMaybe<Array<TimeRange>>;
};

export type WorkHourType = {
  __typename?: 'WorkHourType';
  closed?: Maybe<Scalars['Boolean']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  open24Hours?: Maybe<Scalars['Boolean']['output']>;
  timeRanges?: Maybe<Array<TimeRangeType>>;
};
