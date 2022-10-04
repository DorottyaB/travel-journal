import data from '../../data';
import Card from '../card/card.component';
import './card-list.styles.css';

export default function CardList() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.title}
        img={item.imageUrl}
        location={item.location}
        googleMapsLocation={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });

  return <div className='card-list-container'>{cards}</div>;
}
