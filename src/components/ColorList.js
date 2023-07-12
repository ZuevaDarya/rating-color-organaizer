import React from "react";
import Color from "./Color";
import { useColors } from './ColorProvider';
import '../styles/colorList.css'

export default function ColorList() {
  const { colors } = useColors();
  
  if (!colors.length) return <div>No Colors Listed. (Add a color)</div>;

  return (
    <div className="color-list">
      {
        colors.map(color => (<Color key={color.id} {...color} />))
      }
    </div>
  );
}

//!передача данных без контекста
// export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) {
//   if (!colors.length) return <div>No Colors Listed. (Add a color)</div>;

//   return (
//     <div>
//       {colors.map((color, idx) => <Color key={idx} {...color} onRemove={onRemoveColor} onRate={onRateColor} />)}
//     </div>
//   );
// }