import './Card.css';

function Card({ icon, title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h2>{icon} {title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;