import './card.styles.css';
import pinIcon from '../../assets/map-pin-light.svg';

export default function Card(props) {
  return (
    <div className='card' key={props.title}>
      <div className='image-container'>
        <img src={props.img} alt={props.title} />
      </div>
      <div className='details'>
        <div className='flex-container'>
          <img src={pinIcon} alt='Map pin icon' />
          <p className='location'>{props.location}</p>
          <a href={props.googleMapsLocation}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <p className='date'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  );
}
