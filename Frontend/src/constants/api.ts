const API_BASE = '/api';

// Auth
export const SIGNUP = `${API_BASE}/auth/signup`;
export const LOGIN = `${API_BASE}/auth/login`;
export const LOGOUT = `${API_BASE}/auth/logout`;
export const EMAIL_DUPLICATE_CHECK = `${API_BASE}/auth/email-check`;
export const TEL_VERIFICATION_START = `${API_BASE}/auth/send-code`;
export const TEL_VERIFICATION_END = `${API_BASE}/auth/validate-code`;
export const VERIFY_LOGIN = `${API_BASE}/auth/verify`;

// Users
export const GET_USER = `${API_BASE}/users`;
export const FIND_EMAIL = `${API_BASE}/users/find-email`;
export const VERIFY_USER = `${API_BASE}/users/verify-user`;
export const UPDATE_AVATAR = `${API_BASE}/users/profile`;
export const CHANGE_PASSWORD = `${API_BASE}/users`;
export const WITHDRAWAL = `${API_BASE}/users`;
export const APPLY_BARTENDER = `${API_BASE}/users/apply`;

// S3
export const GET_S3_URL = `${API_BASE}/image-upload`;
