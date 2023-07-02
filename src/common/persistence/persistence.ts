export function get<T>(name: string): T | null {
  try {
    const value = localStorage.getItem(name);
    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  } catch (error) {
    return null;
  }
}

export function set<T>(name: string, value: T) {
  return localStorage.setItem(name, JSON.stringify(value));
}

export function remove(name: string) {
  return localStorage.removeItem(name);
}
