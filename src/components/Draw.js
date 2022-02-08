import React from "react";

//calculate triangle points
const calculateTriangle = (a, b, c) => {
  const ax = 10;
  const ay = 10;
  const bx = ax + c;
  const by = ay;
  const cosAlpha = (a * a - b * b - c * c) / (b * c * 2);
  const alpha = Math.acos(cosAlpha);
  const cx = ax + b * cosAlpha;
  const cy = ay + b * Math.sin(alpha);
  return { ax, ay, bx, by, cx, cy };
};

export function Draw({ triangleValues, triangleType }) {
  const { a, b, c } = triangleValues;

  const { ax, ay, bx, by, cx, cy } = calculateTriangle(a, c, b);

  return (
    <div className="draw-container">
      <div className="draw-text">
        {/* {JSON.stringify({ a, b, c })}  */}
        <p data-testid="triangle-type">{triangleType}</p>
      </div>
      <div>
        <svg className="traingle" height="400" width="400">
          <polygon
            className="polygon"
            style={{
              strokeWidth: 3,
              stroke: "white",
              fill: "none",
            }}
            points={`${ax},${ay} ${bx},${by} ${cx},${cy}`}
            // points="250,60 100,400 400,400"
          />
        </svg>
      </div>
    </div>
  );
}
