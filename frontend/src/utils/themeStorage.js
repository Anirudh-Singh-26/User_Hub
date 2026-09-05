const THEME_STORAGE_KEY = "user-management-theme";

export function saveTheme(themeData) {
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(themeData));
}

export function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (!savedTheme) {
    return null;
  }

  try {
    return JSON.parse(savedTheme);
  } catch {
    return null;
  }
}
