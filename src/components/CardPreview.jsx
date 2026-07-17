export function CardPreview({ title, imageUrl, subtitle }) {
  return (
    <article className="card-preview">
      {imageUrl ? <img src={imageUrl} alt={title} /> : <div className="card-placeholder" />}
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </article>
  );
}
