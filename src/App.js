import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { SidesForm } from "./components/SidesForm";
import { Draw } from "./components/Draw";


//validate triangle shapes and inputs
function triangle(a, b, c) {
  const isValid = a + b > c && a + c > b && b + c > a;
  if (!isValid) {
    return "invalid";
  }

  if (a === b && a === c && b === c) return "Equilateral";
  if (a === b || a === c || c === b) return "Isosceles";
  else {
    return "Scalene";
  }
}

function App() {
  const [triangleValues, setTriangleValues] = React.useState({
    sides: null,
    type: null,
  });

  function sidesValues(value) {
    const triangleType = triangle(value.a, value.b, value.c);

    if (triangleType === "invalid") {
      alert("invalid inputs");
    } else {
      setTriangleValues({ sides: value, type: triangleType });
    }
  }

  return (
    <div className="App">
      <SidesForm onSubmit={sidesValues} />
      {triangleValues.sides && (
        <Draw
          triangleValues={triangleValues.sides}
          triangleType={triangleValues.type}
        />
      )}
    </div>
  );
}

export default App;
