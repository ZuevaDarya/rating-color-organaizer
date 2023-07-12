
import { FaStar } from 'react-icons/fa'
import '../styles/rating.css'

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar style={{ cursor: 'pointer', width: 20 }} color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {

  return (
    <div className="stars-container">
      <div>
        {createArray(totalStars).map((_, idx) => (
          <Star key={idx} selected={selectedStars > idx} onSelect={() => onRate(idx + 1)} />
        ))}
      </div>

      <p className='num-stars'>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}