import { themes } from "../utils/themes";
import { useTheme } from "../context/ThemeContext";

function ThemePanel() {
  const {
    preset,
    buttonColor,
    font,
    changePreset,
    changeButtonColor,
    resetButtonColor,
    changeFont,
    resetFont,
  } = useTheme();

  function handleFontUpload(event) {
    const file = event.target.files[0];

    if (!file) return;

    const validFile = /\.(ttf|otf|woff|woff2)$/i.test(file.name);

    if (!validFile) {
      alert("Please select a valid font file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      changeFont({
        name: file.name.replace(/\.[^/.]+$/, ""),
        dataUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="theme-panel">
      <h3>Theme</h3>

      <div className="theme-section">
        <label>Preset</label>

        <div className="theme-options">
          {Object.entries(themes).map(([themeKey, theme]) => (
            <button
              key={themeKey}
              type="button"
              className={
                preset === themeKey ? "theme-option selected" : "theme-option"
              }
              onClick={() => changePreset(themeKey)}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>

      <div className="theme-section">
        <label className= "Button-color">Button Color</label>

        <div className="color-control">
          <input
            id="button-color"
            type="color"
            value={buttonColor || themes[preset].accent}
            onChange={(event) => changeButtonColor(event.target.value)}
          />

          <span>{buttonColor || themes[preset].accent}</span>
        </div>

        {buttonColor && (
          <button
            type="button"
            className="reset-button"
            onClick={resetButtonColor}
          >
            Use preset color
          </button>
        )}
      </div>

      <div className="theme-section">
        <label className="font-label">Custom Font</label>

        <input
          id="font-upload"
          type="file"
          accept=".ttf,.otf,.woff,.woff2"
          onChange={handleFontUpload}
        />

        {font && (
          <div className="font-info">
            <span>{font.name}</span>

            <button type="button" className="reset-button" onClick={resetFont}>
              Remove Font
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThemePanel;
