import "./Card.css";
import marker from "../../assets/images/icon-marker.svg";
const Card = (props) => {
  return (
    <article className="card">
      <div className="card-left">
        <img
          className="card-main-img"
          src={props.item.img.src}
          alt={props.item.img.alt}
        />
      </div>

      <div className="card-right">
        <div className="card-right-line1">
          <img src={marker} alt="marker icon" />
          <p>{props.item.country}</p>
          <a href={props.item.googleMapsLink}>View on Google Maps</a>
        </div>
        <h2 className="card-right-title">{props.item.title}</h2>
        <p className="card-right-date">{props.item.dates}</p>
        <p className="card-right-text">{props.item.text}</p>
      </div>
    </article>
  );
};

export default Card;
