import React from "react";
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";

export default function App() {
  return (
    <div style={{fontSize: '1rem', padding: '20px'}}>
      <AddColorForm />
      <ColorList />
    </div>
  );
}

//!передача данных без контекста 
// import React, { useState } from "react";
// import ColorList from "./components/ColorList";
// import AddColorForm from "./components/AddColorForm";
// import colorData from "./data/color-data.json";
// import {v4} from 'uuid';
// export default function App() {
//   const [colors, setColors] = useState(colorData);

//   return (
//     <>
//       <AddColorForm
//         onNewColor={(title, color) => {
//           const newColors = [
//             {
//               id: v4(),
//               rating: 0,
//               title,
//               color
//             },
//             ...colors
//           ];

//           setColors(newColors);
//         }}
//       />
//       <ColorList
//         colors={colors}
//         onRemoveColor={id => {
//           const newColors = colors.filter(color => color.id !== id);
//           setColors(newColors);
//         }}
//         onRateColor={(id, rating) => {
//           const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
//           setColors(newColors);
//         }}
//       />
//     </>
//   );
// }


