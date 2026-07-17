import { styleOptions } from '../ai/prompt-engine/styleRules.js';

export function StyleSelector({ value, onChange }) {
  return (
    <label>
      Artistic direction
      <select value={value} onChange={(event) => onChange?.(event.target.value)}>
        {styleOptions.map((style) => (
          <option key={style} value={style}>{style}</option>
        ))}
      </select>
    </label>
  );
}
