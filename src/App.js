import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { SidesForm } from "./components/SidesForm";
import { Draw } from "./components/Draw";
import { message } from "antd";

export const EQUILATERAL = "Equilateral";
export const ISOSCELES = "Isosceles";
export const SCALENE = "Scalene";
export const INVALID = "Invalid Inputs";

//validate triangle shapes and inputs
function triangle(a, b, c) {
  const isValid = a + b > c && a + c > b && b + c > a;
  if (!isValid) {
    return INVALID;
  }
  if (a === b && a === c && b === c) return EQUILATERAL;
  if (a === b || a === c || c === b) return ISOSCELES;
  else {
    return SCALENE;
  }
}

function App() {
  const [triangleValues, setTriangleValues] = React.useState({
    sides: null,
    type: null,
  });

  function sidesValues(value) {
    const { a, b, c } = value;

    const triangleType = triangle(a, b, c);

    if (triangleType === INVALID) {
      setTriangleValues({ sides: value, type: triangleType });
      message.error({
        content: `${INVALID} Inputs`,
        className: "custom-class",
        duration: 0.5,
        style: {
          marginTop: "50vh",
        },
      });
    } else {
      setTriangleValues({ sides: value, type: triangleType });
    }
  }

  return (
    <div className="App">
      <SidesForm onSubmit={sidesValues} />
      {triangleValues.type && triangleValues.type && (
        <Draw
          triangleValues={triangleValues.sides}
          triangleType={triangleValues.type}
        />
      )}
    </div>
  );
}

export default App;
