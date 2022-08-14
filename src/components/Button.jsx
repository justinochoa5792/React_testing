import React, { useState } from "react";

const Button = () => {
  const [showAnotherButton, setShowAnotherButton] = useState(false);
  return (
    <div>
      <button
        data-testid="button"
        onClick={() => {
          setShowAnotherButton(true);
        }}
      >
        Click
      </button>
      {showAnotherButton && <button data-testid="button">Click Also</button>}
    </div>
  );
};

export default Button;
