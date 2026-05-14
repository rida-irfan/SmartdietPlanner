const TOKEN_KEY = 'dietPlannerToken';
const USER_KEY = 'dietPlannerUser';

export const saveAuth = (user, token) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const getUser = () => {
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
};

export const isLoggedIn = () => !!localStorage.getItem(TOKEN_KEY);
