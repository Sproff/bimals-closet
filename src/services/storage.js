export function getItem(key, defaultValue = []) {
  const res = localStorage.getItem(key);

  return res ? JSON.parse(res) : defaultValue;
}

export function setItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export const cartStorage = getItem('cartStorage');
