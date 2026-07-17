export function ImageUploader({ onImageSelected, analysis }) {
  return (
    <section className="studio-panel image-uploader">
      <h2>Reference Image</h2>
      <label className="drop-zone">
        <input type="file" accept="image/*" onChange={(event) => onImageSelected?.(event.target.files?.[0])} />
        <span>Drag/drop or upload a reference image</span>
      </label>
      {analysis && <pre>{JSON.stringify(analysis, null, 2)}</pre>}
    </section>
  );
}
