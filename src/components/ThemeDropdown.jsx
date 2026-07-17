export const themeOptions = ['Luxury', 'Boho', 'Modern', 'Minimal', 'Spiritual', 'Dark', 'Pastel', 'Vintage'];

export function ThemeDropdown({ value, onChange }) {
  return (
    <label>
      Visual collection
      <select value={value} onChange={(event) => onChange?.(event.target.value)}>
        {themeOptions.map((theme) => (
          <option key={theme} value={theme}>{theme}</option>
        ))}
      </select>
    </label>
  );
}
