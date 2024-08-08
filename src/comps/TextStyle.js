import React from "react";

const TextStyle = ({ fontStyle, color, alignment, shadow , size }) => {
  return (
    <div
      className={`text-3xl ${fontStyle} ${color} ${alignment} ${shadow}  ${size} hover:text-gray-500 hover:shadow-lg transition duration-200`}
    >
      By Your Side...
    </div>
  );
};

export default TextStyle;
