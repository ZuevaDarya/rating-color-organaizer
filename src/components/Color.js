import React from "react";
import StarRating from "./StarRating"
import { FaTrash } from "react-icons/fa";
import { useColors } from './ColorProvider';
import '../styles/color.css';

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();
  return (
    <section className="color-item">
      <h1 className="color-item__title">{title}</h1>
      <button onClick={() => removeColor(id)} className="color-item__btn"><FaTrash /></button>
      <div className="color-item__color" style={{ backgroundColor: color }}></div>
      <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
    </section>
  );
}

//!передача данных без контекста
// import React from "react";
// import StarRating from "./StarRating"
// import { FaTrash } from "react-icons/fa";
// import { useColors } from '../color-hooks';
// export default function Color({ id, title, color, rating, onRemove = f => f, onRate = f => f }) {
//   return (
//     <section>
//       <h1>{title}</h1>
//       <button onClick={() => console.log('Color.js', onRemove(id))}>
//         <FaTrash />
//       </button>
//       <div style={{ height: 50, backgroundColor: color }}></div>
//       <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)} />
//     </section>
//   );
// }