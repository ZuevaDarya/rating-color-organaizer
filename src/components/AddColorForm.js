import React from "react";
import { useInput } from "../hooks";
import { useColors } from "./ColorProvider";
import "../styles/addColorForm.css";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColors();

  const submit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit} className="form">
      <input
        value={titleProps.value}
        onChange={titleProps.onChange}
        type='text'
        placeholder="color title..."
        required
        className="form__input-title form-item"
      />
      <input
        value={colorProps.value}
        onChange={colorProps.onChange}
        type='color'
        required
        className="form__input-color form-item"
      />
      <button className="form__button form-item">ADD</button>
    </form>
  );
}

//!передача данных без контекста
// import { useInput } from "../hooks";

// export default function AddColorForm({ onNewColor = f => f }) {
//   const [titleProps, resetTitle] = useInput('');
//   const [colorProps, resetColor] = useInput('#000000');

//   const submit = e => {
//     e.preventDefault();
//     onNewColor(titleProps.value, colorProps.value);
//     resetTitle();
//     resetColor();
//   };

//   return (
//     <form onSubmit={submit}>
//       <input
//         value={titleProps.value}
//         onChange={titleProps.onChange}
//         type='text'
//         placeholder="color title..."
//         required
//       />
//       <input
//         value={colorProps.value}
//         onChange={colorProps.onChange}
//         type='color'
//         required
//       />
//       <button>ADD</button>
//     </form>
//   );
// }