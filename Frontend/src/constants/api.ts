const API_BASE = 'http://localhost:8000/api';

// Auth
export const SIGNUP = `${API_BASE}/auth/signup`;
export const LOGIN = `${API_BASE}/auth/login`;
export const LOGOUT = `${API_BASE}/auth/logout`;
export const EMAIL_DUPLICATE_CHECK = `${API_BASE}/auth/email-check`;
export const TEL_VERIFICATION_START = `${API_BASE}/auth/send-code`;
export const TEL_VERIFICATION_END = `${API_BASE}/auth/validate-code`;

// Users
export const GET_USER = `${API_BASE}/users`;
export const FIND_EMAIL = `${API_BASE}/users/find-email`;
export const VERIFY_USER = `${API_BASE}/users/verify-user`;
export const EDIT_PROFILE = (userId: number) => `${API_BASE}/users/${userId}`;
export const CHANGE_PASSWORD = (userId: number) =>
  `${API_BASE}/users/${userId}`;
export const WITHDRAWAL = (userId: number) => `${API_BASE}/users/${userId}`;
