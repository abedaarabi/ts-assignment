import React from "react";
import { message } from "antd";
import { Input } from "./Input";

function validate(number) {
  return number ? true : false;
}

export function SidesForm({ onSubmit }) {
  const [sides, setSides] = React.useState({
    a: null,
    b: null,
    c: null,
  });

  function sidesValues({ a = sides.a, b = sides.b, c = sides.c }) {
    setSides({
      a,
      b,
      c,
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (validate(sides.a) && validate(sides.b) && validate(sides.c)) {
      onSubmit({ a: sides.a, b: sides.b, c: sides.c });
    } else {
      message.error({
        content: "Please fill out all the inputs",
        className: "custom-class",
        duration: 0.5,
        style: {
          marginTop: "10vh",
        },
      });
    }
  }

  return (
    <div className="sides-form-container">
      <form onSubmit={submitHandler}>
        <Input
          side="A"
          value={sides.a || ""}
          onNumberChange={(value) => sidesValues({ a: Number(value) })}
        />
        <Input
          side="B"
          value={sides.b || ""}
          onNumberChange={(value) => sidesValues({ b: Number(value) })}
        />
        <Input
          side="C"
          value={sides.c || ""}
          onNumberChange={(value) => sidesValues({ c: Number(value) })}
        />

        <input type="submit" value="Draw" />
      </form>
    </div>
  );
}
