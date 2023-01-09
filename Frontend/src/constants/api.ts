const API_BASE = '/api';

// Auth
export const SIGNUP = `${API_BASE}/auth/signup`;
export const LOGIN = `${API_BASE}/auth/login`;
export const LOGOUT = `${API_BASE}/auth/logout`;
export const EMAIL_DUPLICATE_CHECK = `${API_BASE}/auth/email-check`;
export const TEL_VERIFICATION_START = (type: string) =>
  `${API_BASE}/${type}/send-code`;
export const TEL_VERIFICATION_END = `${API_BASE}/auth/validate-code`;
export const VERIFY_LOGIN = `${API_BASE}/auth/verify`;

// Users
export const GET_USER = `${API_BASE}/users/mypage`;
export const FIND_EMAIL = `${API_BASE}/users/find-email`;
export const VERIFY_USER = `${API_BASE}/users/verify-user`;
export const UPDATE_AVATAR = `${API_BASE}/users/profile`;
export const CHANGE_PASSWORD = `${API_BASE}/users`;
export const WITHDRAWAL = `${API_BASE}/users`;
export const APPLY_BARTENDER = `${API_BASE}/users/apply`;

// S3
export const GET_S3_URL = (folder: string) =>
  `https://g3o2xpxswgqp3cyj6scyairg740skgtv.lambda-url.ap-northeast-2.on.aws/?folder=${folder}`;

// mypage
export const GET_MY_COMMENTS = `${API_BASE}/users/my-comments`;
export const GET_MY_COCKTAILS = `${API_BASE}/cocktails/my-cocktails`;
export const GET_MY_COCKFLOWS = `${API_BASE}/cockflow/my-cockflows`;
export const GET_MY_LIKES = `${API_BASE}/users/my-likes`;

// Home
export const GET_RANKINGS_OF_COCKTAIL_AND_USER = `${API_BASE}/cocktails/home`;

//Cockcipe
export const GET_COCKTAILS = `${API_BASE}/cocktails/lists`;
export const GET_CATEGORY_COCKTAILS = (categoryId: string) =>
  `${API_BASE}/cocktails/?category=${categoryId}`;
export const GET_CATEGORY_COCKTAILS_OFFI = (
  categoryId: string,
  official: boolean,
) => `${API_BASE}/cocktails/?category=${categoryId}&official=${official}`;
export const FIND_CATEGORY_COCKTAILS = (categoryId: string, keyword: string) =>
  `${API_BASE}/cocktails/?category=${categoryId}&keyword=${keyword}`;
export const FIND_CATEGORY_COCKTAILS_OFFI = (
  categoryId: string,
  keyword: string,
  official: boolean,
) =>
  `${API_BASE}/cocktails/?category=${categoryId}&keyword=${keyword}&official=${official}`;
export const GET_COCKTAILS_SCROLL = (categoryId: string, endpoint: number) =>
  `${API_BASE}/cocktails/?category=${categoryId}&keyword=&official=&endpoint=${endpoint}`;

export const GET_DETAIL_COCKTAIL = (cocktailId: number) =>
  `${API_BASE}/cocktails/${cocktailId}`;
export const POST_COCKTAIL = `${API_BASE}/cocktails`;
export const PATCH_COCKTAIL = (cocktailId: number) =>
  `${API_BASE}/cocktails/updatecocktail/${cocktailId}`;
export const GET_INDEGRIENT = `${API_BASE}/ingredients`;
export const SHARE_KAKAO = (id: number) => `cockcipe/detail/${id}`;
export const COCKFLOW_ID = (pageId: number | string | undefined) =>
  `${API_BASE}/cockflow/${pageId}`;
export const LIKE_COCKTAIL = (cocktailId: number) =>
  `${API_BASE}/cocktails/likes/${cocktailId}`;

// Cockgorithm
export const GET_COCKGORITHM_COCKTAIL = `${API_BASE}/cocktails/cockgorithm`;

export const COCKFLOW = () => `${API_BASE}/cockflow`;
export const COCKFLOW_DETAIL = (id: string) =>
  `${API_BASE}/cockflow/detail/${id}`;
export const GET_COCKFLOW = (page: number) => `${API_BASE}/cockflow/?q=${page}`;
export const POST_COCKFLOW_COMMENTS = (cockflowId: string) =>
  `${API_BASE}/cockflow/${cockflowId}/comments`;
export const COCKFLOW_TWOID = (cockflowId: string, commentId: number) => {
  return `${API_BASE}/cockflow/${cockflowId}/comments/${commentId}`;
};
