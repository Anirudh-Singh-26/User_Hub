import { createContext, useContext, useEffect, useState } from "react";

import { themes, DEFAULT_THEME } from "../utils/themes";
import { loadTheme, saveTheme } from "../utils/themeStorage";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const savedTheme = loadTheme();

  const [preset, setPreset] = useState(savedTheme?.preset || DEFAULT_THEME);
  const [buttonColor, setButtonColor] = useState(
    savedTheme?.buttonColor || null,
  );
  const [font, setFont] = useState(savedTheme?.font || null);

  useEffect(() => {
    const theme = themes[preset];

    document.documentElement.style.setProperty(
      "--background",
      theme.background,
    );
    document.documentElement.style.setProperty("--surface", theme.surface);
    document.documentElement.style.setProperty("--text", theme.text);
    document.documentElement.style.setProperty("--muted-text", theme.mutedText);
    document.documentElement.style.setProperty("--border", theme.border);
    document.documentElement.style.setProperty("--accent", theme.accent);

    document.documentElement.style.setProperty(
      "--button-color",
      buttonColor || theme.accent,
    );
  }, [preset, buttonColor]);

  useEffect(() => {
    if (!font) {
      document.documentElement.style.setProperty(
        "--font-family",
        "Arial, Helvetica, sans-serif",
      );
      return;
    }

    const fontFace = new FontFace(font.name, `url(${font.dataUrl})`);

    fontFace
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);

        document.documentElement.style.setProperty(
          "--font-family",
          `"${font.name}", Arial, Helvetica, sans-serif`,
        );
      })
      .catch(() => {
        alert("Unable to load this font.");
      });
  }, [font]);

  useEffect(() => {
    saveTheme({
      preset,
      buttonColor,
      font,
    });
  }, [preset, buttonColor, font]);

  return (
    <ThemeContext.Provider
      value={{
        preset,
        buttonColor,
        font,
        changePreset: setPreset,
        changeButtonColor: setButtonColor,
        resetButtonColor: () => setButtonColor(null),
        changeFont: setFont,
        resetFont: () => setFont(null),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
