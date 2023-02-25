export default {
  get: (key: string) => localStorage[key],
  set: (key: string, value: any) =>
    value instanceof Object
      ? (localStorage[key] = JSON.stringify(value))
      : (localStorage[key] = value),
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};

export const getToken = () => {
  return localStorage["auth-token"];
};
