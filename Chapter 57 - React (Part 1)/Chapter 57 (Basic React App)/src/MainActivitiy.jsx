import "./MainActivitiy.css"

export default function MainActivity({ title, description, price }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h4>{description}</h4>
      <h3>
        <span className="old-price">₹{price.old}</span> →
        <span className="new-price"> ₹{price.new}</span>
      </h3>
    </div>
  );
}
